# Updating the website

This is a static site, so no build step is needed. Routine content updates require
editing only these two files:

- `publications-content.js` for publications.
- `timeline-content.js` for timeline entries, logos, locations, and photos.

Both files contain HTML inside a JavaScript template string. Keep the opening and
closing backticks intact. Image, poster, logo, and photo files still need to be
copied into their corresponding asset folders.

## 1. Add a publication

Edit [publications-content.js](publications-content.js). Copy one complete
`<tr class="publication-row">…</tr>` block and place the copy in chronological
order, newest first. For a normal static preview, copy a row without
`onmouseover`/`onmouseout` handlers. Then update every field in the copied row:

- Put the preview image or video in `images/` and update its path and alt text.
- Replace the title, authors, venue, year, description, and paper/code/project links.
- Keep the `paper-media-cell`, `paper-media`, and `paper-info-cell` classes.
- Keep the venue in `<em>Venue</em>` followed by the year, e.g. `<em>CVPR</em>, 2027`.
- Set `data-tags="Earth Observation;3D Reconstruction"` using semicolons between topics.
  Year, venue, and topic filters update automatically from the rows.
- For a poster, add its PDF to `data/posters/` and link to its exact filename.
  For animated previews, copy an existing `.paper-media .two` overlay and update
  its media paths and any IDs. `site.js` handles hover automatically; no new
  JavaScript handlers are needed.

## 2. Add a timeline event

Edit [timeline-content.js](timeline-content.js). Copy one complete
`<li class="timeline-item …">…</li>` block inside `<ol class="timeline-list">`,
place it in chronological order with the newest entries first, and replace its
content and attributes. For example:

```html
<li class="timeline-item event"
    data-location="Barcelona"
    data-logo="data/logos/CVPR_2027.png"
    data-photo="data/photos/2027_06_CVPR.jpg">
  <time datetime="2027-06">Jun. 2027</time>
  <span class="timeline-marker" aria-hidden="true">◆</span>
  <div>
    <strong>CVPR 2027 · Barcelona</strong>
    <p>Presented “Paper title” · <a href="https://example.org/" target="_blank" rel="noopener">Conference</a></p>
  </div>
</li>
```

Use `event`/`◆` for conferences and talks, `career`/`●` for career events,
or `award`/`★` for awards. Include a `time` with `datetime="YYYY-MM"`, a
`strong` title, and a description paragraph. Replace the example details and URL.

The attributes on the opening `<li>` control the related visuals:

- `data-logo` is required for every entry and points to a file in `data/logos/`.
- `data-location` is optional. Add it to connect the entry to a globe marker and
  city filter.
- `data-photo` is optional and adds the image to the conference gallery and viewer.

### Show the event on the globe

The globe reads the timeline automatically. Set `data-location` to the exact city
name used by the globe. For an existing city, this is the only change needed:

```html
data-location="Barcelona"
```

For a new city, add only its name and coordinates to `locationDefinitions` in
[research-globe.html](research-globe.html):

```js
{ name: 'Rome, Italy', lat: 41.903, lon: 12.496 },
```

Then use `data-location="Rome, Italy"` on timeline entries for that city. Entries
without `data-location`, such as remote events, still appear in the timeline and
in the globe view's **All** event list. They do not appear under a city filter and
cannot select or zoom to a globe marker.

### Attach a conference photo

1. Add the image to `data/photos/`, e.g. `2027_06_CVPR.jpg`.
2. Add its path directly to the timeline entry:

   ```html
   data-photo="data/photos/2027_06_CVPR.jpg"
   ```

The item must also have a `data-location` that matches a globe city. Image paths
and filename capitalization must match exactly.

The gallery, photo dialog, and arrow navigation include the new photo automatically.
Adding a file to the photos folder alone does not register it.

### Associate a logo with every timeline entry

Every timeline entry must include a `data-logo` attribute directly on its `<li>`.
Add the image to `data/logos/`, then reference its path in the entry:

```html
<li class="timeline-item event" data-logo="data/logos/CVPR_2027.png">
```

No logo mapping in `research-globe.html` is needed. The image appears
automatically beside the entry in Timeline view, in the location hover preview,
and at the top-right of the event card beside the globe. In both event lists,
selecting the logo opens a larger dialog. Hover previews show only the logos,
and repeated logos are shown once per location. Keep the path and filename
capitalization exact.

Adding an entry in a city already listed on the globe does not require editing
any other source file. Edit `research-globe.html` only when a new city needs a
name and coordinates. The globe starts with no city selected and the **All**
filter active, displaying every timeline entry chronologically. Entries with
`data-location` also appear under their city filter, and selecting their card
from **All** selects and zooms to that city.

## Preview

From this directory, run `python3 -m http.server 8000`, then open
`http://localhost:8000/`. Check publication filters, timeline filters, the globe
location selection and deselection, photo loading, and arrow navigation before
publishing.
