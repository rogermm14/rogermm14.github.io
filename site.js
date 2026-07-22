(function () {
  function initTimeline(root) {
    const items = Array.from(root.querySelectorAll('.timeline-item'));
    const filters = Array.from(root.querySelectorAll('.timeline-filter'));
    if (!items.length || !filters.length) return;

    const latestItem = items.reduce((latest, item) => {
      const itemDate = item.querySelector('time').getAttribute('datetime');
      const latestDate = latest.querySelector('time').getAttribute('datetime');
      return itemDate > latestDate ? item : latest;
    });
    const latestTitle = latestItem.querySelector('strong').textContent.trim();
    const latestDate = latestItem.querySelector('time').textContent.trim();
    root.querySelector('.timeline-summary-latest').textContent =
      'Latest: ' + latestTitle + ', ' + latestDate;

    filters.forEach((filter) => {
      const category = filter.dataset.category;
      filter.addEventListener('click', function () {
        items.forEach((item) => {
          const hidden = category !== 'all' && !item.classList.contains(category);
          item.hidden = hidden;
          item.classList.toggle('is-hidden', hidden);
          item.classList.remove('last-visible');
        });

        const visibleItems = items.filter((item) => !item.classList.contains('is-hidden'));
        if (visibleItems.length) visibleItems[visibleItems.length - 1].classList.add('last-visible');

        filters.forEach((button) => {
          const active = button === filter;
          button.classList.toggle('active', active);
          button.setAttribute('aria-pressed', active);
        });
      });
    });

    filters[0].setAttribute('aria-pressed', 'true');
    items[items.length - 1].classList.add('last-visible');
  }

  function initPublications(root) {
    const publicationRows = Array.from(root.querySelectorAll('.publication-row'));
    const filterMenus = Array.from(root.querySelectorAll('.filter-menu'));
    const yearOptions = root.querySelector('#year-options');
    const venueOptions = root.querySelector('#venue-options');
    const resetButton = root.querySelector('.filter-reset');
    const selections = { year: 'all', topic: 'all', venue: 'all' };
    if (!publicationRows.length || !yearOptions || !venueOptions || !resetButton) return;

    function getRowTags(row) {
      return (row.dataset.tags || '')
        .split(';')
        .map((item) => item.trim())
        .filter(Boolean);
    }

    function normalizeVenue(venue) {
      const normalized = venue.replace(/\s+Workshops?$/i, '').trim();
      if (/^ISPRS (Annals|Archives)$/i.test(normalized)) return 'ISPRS';
      if (/^Artificial Intelligence Research and Development$/i.test(normalized)) return 'CCIA';
      return normalized;
    }

    function getRowDetails(row) {
      const infoCell = row.querySelector('.paper-info-cell');
      const yearMatch = infoCell.textContent.match(/\b(19|20)\d{2}\b/);
      const venueElement = infoCell.querySelector('em');

      return {
        year: yearMatch ? yearMatch[0] : '',
        venue: venueElement ? normalizeVenue(venueElement.textContent.trim()) : ''
      };
    }

    function makeOption(value, label) {
      const button = document.createElement('button');
      button.className = 'filter-option' + (value === 'all' ? ' active' : '');
      button.type = 'button';
      button.dataset.value = value;
      button.dataset.label = label;
      button.textContent = label;
      return button;
    }

    function buildOptions() {
      const details = publicationRows.map(getRowDetails);
      const years = [...new Set(details.map((item) => item.year).filter(Boolean))]
        .sort((a, b) => Number(b) - Number(a));
      const venues = [...new Set(details.map((item) => item.venue).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));

      yearOptions.appendChild(makeOption('all', 'All'));
      years.forEach((year) => yearOptions.appendChild(makeOption(year, year)));
      venueOptions.appendChild(makeOption('all', 'All'));
      venues.forEach((venue) => venueOptions.appendChild(makeOption(venue, venue)));

      root.querySelectorAll('.filter-option').forEach((option) => {
        if (!option.dataset.label) option.dataset.label = option.textContent.trim();
      });
    }

    function rowMatches(row, filters) {
      const tags = getRowTags(row);
      const details = getRowDetails(row);

      return (filters.topic === 'all' || tags.includes(filters.topic)) &&
        (filters.year === 'all' || details.year === filters.year) &&
        (filters.venue === 'all' || details.venue === filters.venue);
    }

    function getOptionCount(type, value) {
      const candidateFilters = Object.assign({}, selections, { [type]: value });
      return publicationRows.filter((row) => rowMatches(row, candidateFilters)).length;
    }

    function updateControls() {
      filterMenus.forEach((menu) => {
        const type = menu.dataset.filterMenu;
        const selected = selections[type];
        const selectedCount = getOptionCount(type, selected);
        const selectedLabel = selected === 'all' ? 'All' : selected;
        const options = Array.from(menu.querySelectorAll('.filter-option'));

        menu.querySelector('.filter-value').textContent = selectedLabel + ' (' + selectedCount + ')';
        menu.classList.toggle('has-value', selected !== 'all');

        options.forEach((option) => {
          const active = option.dataset.value === selected;
          const count = getOptionCount(type, option.dataset.value);
          option.dataset.count = count;
          option.textContent = option.dataset.label + ' (' + count + ')';
          option.classList.toggle('active', active);
          option.setAttribute('aria-pressed', active);
          option.disabled = count === 0 && !active;
        });

        if (type === 'topic' || type === 'venue') {
          options.sort((a, b) => {
            if (a.dataset.value === 'all') return -1;
            if (b.dataset.value === 'all') return 1;
            const countDifference = Number(b.dataset.count) - Number(a.dataset.count);
            return countDifference || a.dataset.label.localeCompare(b.dataset.label);
          });
          const container = menu.querySelector('.filter-options');
          options.forEach((option) => container.appendChild(option));
        }
      });
    }

    function applyFilters() {
      publicationRows.forEach((row) => {
        row.style.display = rowMatches(row, selections) ? '' : 'none';
      });
      updateControls();
      resetButton.hidden = Object.values(selections).every((value) => value === 'all');
    }

    filterMenus.forEach((menu) => {
      menu.addEventListener('click', function (event) {
        const option = event.target.closest('.filter-option');
        if (!option) return;
        selections[menu.dataset.filterMenu] = option.dataset.value;
        menu.open = false;
        applyFilters();
      });

      menu.addEventListener('toggle', function () {
        if (!menu.open) return;
        filterMenus.forEach((otherMenu) => {
          if (otherMenu !== menu) otherMenu.open = false;
        });
      });
    });

    resetButton.addEventListener('click', function () {
      Object.keys(selections).forEach((key) => { selections[key] = 'all'; });
      applyFilters();
    });

    root.querySelectorAll('.paper-tag').forEach((tag) => {
      tag.addEventListener('click', function () {
        selections.topic = tag.dataset.filter;
        applyFilters();
        root.querySelector('[data-filter-menu="topic"]').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    publicationRows.forEach((row) => {
      row.removeAttribute('onmouseover');
      row.removeAttribute('onmouseout');
      const overlays = Array.from(row.querySelectorAll('.paper-media .two'));
      row.addEventListener('mouseenter', () => overlays.forEach((overlay) => { overlay.style.opacity = '1'; }));
      row.addEventListener('mouseleave', () => overlays.forEach((overlay) => { overlay.style.opacity = '0'; }));
    });

    document.addEventListener('click', function (event) {
      if (!event.target.closest('.filter-menu')) {
        filterMenus.forEach((menu) => { menu.open = false; });
      }
    });

    buildOptions();
    applyFilters();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTimeline(document.getElementById('timeline-component'));
    initPublications(document.getElementById('publications-component'));
  });
})();
