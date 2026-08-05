document.getElementById("timeline-component").innerHTML = `
<section class="timeline-section" aria-label="News and timeline">
  <details class="timeline-details">
    <summary>
      <span class="timeline-summary-title">News &amp; timeline</span>
      <span class="timeline-summary-latest"></span>
      <span class="timeline-summary-action">View all</span>
    </summary>

    <div class="timeline-content">
      <div class="timeline-legend" aria-label="Timeline categories">
        <button class="timeline-filter active" type="button" data-category="all">All</button>
        <button class="timeline-filter" type="button" data-category="career"><i class="legend-symbol career" aria-hidden="true">●</i> Career &amp; education</button>
        <button class="timeline-filter" type="button" data-category="award"><i class="legend-symbol award" aria-hidden="true">★</i> Awards &amp; scholarships</button>
        <button class="timeline-filter" type="button" data-category="event"><i class="legend-symbol event" aria-hidden="true">◆</i> Conferences, talks &amp; events</button>
        <button class="timeline-view-toggle" type="button" aria-pressed="false">
          <span class="timeline-view-icon" aria-hidden="true">🌍</span>
          <span class="timeline-view-label">Globe view</span>
        </button>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item event">
          <time datetime="2026-09">Sep. 2026</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>ECCV 2026 · Malmö, Sweden</strong>
            </div>
            <p>Two articles presented · <a href="https://eccv.ecva.net/Conferences/2026" target="_blank" rel="noopener">Conference</a> · <a href="https://terrabytes-workshop.github.io" target="_blank" rel="noopener">TerraBytes Workshop</a></p>
          </div>
        </li>
        <li class="timeline-item award">
          <time datetime="2026-06">Jun. 2026</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>ISPRS 2026 Best Young Author Award co-author</strong>
            <p>“Diachronic Stereo Matching...” · Toronto, Canada · <a href="https://www.isprs2026toronto.com/" target="_blank" rel="noopener">Conference</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2026-04">Apr. 2026</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>PHASE-IV-AI plenary meeting · Turku, Finland</strong>
            <p>Horizon Europe project · <a href="https://www.phase4ai-project.eu/?p=2567" target="_blank" rel="noopener">Press</a></p>
          </div>
        </li>
        <li class="timeline-item award">
          <time datetime="2026-02">Feb. 2026</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>3D-ARCH 2026 Best Paper Award co-author</strong>
            <p>“ShinyNeRF” · Ancona, Italy · <a href="https://3darch.fbk.eu/home" target="_blank" rel="noopener">3D-ARCH Workshop</a></p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2026-01">Jan. 2026</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Promoted to Head of Computer Vision</strong>
            <p>Multimedia Technologies Unit, Eurecat · Barcelona</p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2025-12">Dec. 2025</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>DLBCN 2025 · Barcelona</strong>
            </div>
          <p>Deep Learning Barcelona Symposium · Barcelona · <a href="https://sites.google.com/view/dlbcn2025/home" target="_blank" rel="noopener">Website</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2025-11">Nov. 2025</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>PHASE-IV-AI plenary meeting · Porto, Portugal</strong>
            <p>Horizon Europe project · <a href="https://www.phase4ai-project.eu/?p=2193" target="_blank" rel="noopener">Press</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2025-11">Nov. 2025</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>Generative AI masterclass</strong>
            <p>Delivered a two-day masterclass at ISDEFE · Remote · Eurecat Academy</p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2024-11">Nov. 2024</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>Invited speaker at EMAI</strong>
            <p>Erasmus Mundus Joint Master in Artificial Intelligence · Barcelona · <a href="https://www.upf.edu/web/emai/home/-/asset_publisher/5sY4Fac9VVho/content/giga-visited-the-upf-campus/maximized" target="_blank" rel="noopener">Press</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2024-10">Oct. 2024</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>CCIA 2024 · Barcelona</strong>
              </div>
            <p>Presented "Characterization of Synthetic Lung..." · Barcelona · <a href="https://acia.cat/congress-ccia/ccia-2024-edicio-26/" target="_blank" rel="noopener">Conference</a></p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2024-01">Jan. 2024</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Joined Eurecat</strong>
            <p>Multimedia Technologies Unit, Eurecat · Barcelona</p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2023-12">Dec. 2023</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>DLBCN 2023 · Barcelona</strong>
            </div>
             <p>Deep Learning Barcelona Symposium · Barcelona · <a href="https://sites.google.com/view/dlbcn2023/home" target="_blank" rel="noopener">Website</a></p>
            </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2023-09">Sep. 2023</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <strong>Invited speaker at Satellite Image Deep Learning Podcast</strong>
            <p>Deep learning for 3D understanding of satellite images · Remote · <a href="https://www.youtube.com/watch?v=Bn_60DCzSfQ" target="_blank" rel="noopener">Video</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2023-06">Jun. 2023</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>CVPR 2023 · Vancouver, Canada</strong>
            </div>
            <p>Presented “EO-NeRF” · <a href="https://cvpr2023.thecvf.com/Conferences/2023" target="_blank" rel="noopener">Conference</a> · <a href="https://www.grss-ieee.org/events/earthvision-2023/" target="_blank" rel="noopener">EarthVision Workshop</a></p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2023-01">Jan. 2023</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Started Postdoctoral position at Centre Borelli</strong>
            <p>ENS Paris-Saclay · Paris, France</p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2022-12">Dec. 2022</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>PhD thesis defense</strong>
            <p>“Applications of Multi-Image Remote Sensing” · ENS Paris-Saclay · Paris, France</p>
          </div>
        </li>
        <li class="timeline-item award">
          <time datetime="2022-11">Nov. 2022</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>MLBriefs 2022 Best Student Paper Award</strong>
            <p>“Disparity Estimation Networks…” · Paris, France · <a href="https://mlbriefs.com/previous/mlbriefs2/" target="_blank" rel="noopener">MLBriefs Workshop</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2022-06">Jun. 2022</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>CVPR 2022 · New Orleans, USA</strong>
            </div>
            <p>Presented “Sat-NeRF” · <a href="https://cvpr2022.thecvf.com/" target="_blank" rel="noopener">Conference</a> · <a href="https://www.grss-ieee.org/events/earthvision-2022/" target="_blank" rel="noopener">EarthVision Workshop</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2022-06">Jun. 2022</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>ISPRS 2022 · Nice, France</strong>
            </div>
            <p>Presented “L1B+” · <a href="https://www.isprs2022-nice.com/" target="_blank" rel="noopener">Conference</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2021-07">Jul. 2021</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>IGARSS 2021 · Brussels, Belgium</strong>
            </div>
            <p>Two articles presented · Remote · <a href="https://www.igarss2021.com/" target="_blank" rel="noopener">Conference</a></p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2019-10">Oct. 2019</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>ICCV 2019 · Seoul, South Korea</strong>
            </div>
            <p>Presented “To Bundle Adjust or Not” · <a href="https://iccv2019.thecvf.com/" target="_blank" rel="noopener">Conference</a> · <a href="http://3drw2019.dgcv.nii.ac.jp/" target="_blank" rel="noopener">3DRW Workshop</a></p>
          </div>
        </li>
        <li class="timeline-item award">
          <time datetime="2019-10">Oct. 2019</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Paris Region PhD² Scholarship</strong>
            <p>Centre Borelli · ENS Paris-Saclay · Paris, France</p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2019-10">Oct. 2019</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Started PhD position at Centre Borelli</strong>
            <p>ENS Paris-Saclay · Paris, France</p>
          </div>
        </li>
        <li class="timeline-item event">
          <time datetime="2019-06">Jun. 2019</time>
          <span class="timeline-marker" aria-hidden="true">◆</span>
          <div>
            <div class="timeline-event-heading">
              <strong>CVPR 2019 · Long Beach, USA</strong>
            </div>
            <p>Presented “Deep Single Image Camera Calibration...” · <a href="https://cvpr2019.thecvf.com/" target="_blank" rel="noopener">Conference</a></p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2018-10">Oct. 2018</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Joined Centre Borelli</strong>
            <p>ENS Paris-Saclay (formerly ENS Cachan) · Paris, France</p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2018-09">Sep. 2018</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Completed MSc in Computer Vision</strong>
            <p>Top of the class · Final grade: 9.37/10 · UAB · Barcelona</p>
          </div>
        </li>
        <li class="timeline-item award">
          <time datetime="2017-07">Jul. 2017</time>
          <span class="timeline-marker" aria-hidden="true">★</span>
          <div>
            <strong>Fundació Catalunya-La Pedrera Excellence Scholarship</strong>
            <p>MSc in Computer Vision · UAB · Barcelona</p>
          </div>
        </li>
        <li class="timeline-item career">
          <time datetime="2017-06">Jun. 2017</time>
          <span class="timeline-marker" aria-hidden="true">●</span>
          <div>
            <strong>Completed BSc in Audiovisual Systems Engineering</strong>
            <p>Top of the class · Final grade: 9.43/10 · UPF · Barcelona</p>
          </div>
        </li>
      </ol>

      <div class="timeline-globe-view" hidden>
        <p class="timeline-globe-intro">A geographic view of my research journey.</p>
        <iframe class="timeline-globe-frame" data-src="research-globe.html?embed=1" title="Interactive research journey globe"></iframe>
      </div>
    </div>
  </details>
</section>
`;
