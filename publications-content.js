document.getElementById("publications-component").innerHTML = `
<div class="publications-section">
  <table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;">
    <tbody>
      <tr>
        <td colspan="2" style="padding:2px 20px 20px 20px; vertical-align:middle;">
	<div class="publication-filter-block">
	  <div class="publication-filter-controls">
	    <div class="publication-filter-title">Filters</div>
	    <details class="filter-menu" data-filter-menu="year">
	      <summary><span class="filter-name">Year</span><span class="filter-value">All</span></summary>
	      <div class="filter-popover filter-options" id="year-options"></div>
	    </details>
	    <details class="filter-menu" data-filter-menu="topic">
	      <summary><span class="filter-name">Topic</span><span class="filter-value">All</span></summary>
	      <div class="filter-popover filter-options topic-options">
	        <button class="filter-option active" type="button" data-value="all">All</button>
	        <button class="filter-option" type="button" data-value="Earth Observation">Earth Observation</button>
	        <button class="filter-option" type="button" data-value="3D Reconstruction">3D Reconstruction</button>
	        <button class="filter-option" type="button" data-value="Camera Calibration">Camera Calibration</button>
	        <button class="filter-option" type="button" data-value="Neural Rendering">Neural Rendering</button>
	        <button class="filter-option" type="button" data-value="Stereovision">Stereovision</button>
	        <button class="filter-option" type="button" data-value="Generative AI">Generative AI</button>
	        <button class="filter-option" type="button" data-value="Medical Imaging">Medical Imaging</button>
	        <button class="filter-option" type="button" data-value="PhD Thesis">PhD Thesis</button>
	        <button class="filter-option" type="button" data-value="Awards">Awards</button>
	      </div>
	    </details>
	    <details class="filter-menu" data-filter-menu="venue">
	      <summary><span class="filter-name">Venue</span><span class="filter-value">All</span></summary>
	      <div class="filter-popover filter-options venue-options" id="venue-options"></div>
	    </details>
	    <button class="filter-reset" type="button" disabled aria-label="Clear all publication filters">Clear filters</button>
	  </div>
	</div>
       </td>
     </tr>


<! Diachronic Stereo Matching, 2026 >
<tr class="publication-row" data-tags="Earth Observation;3D Reconstruction;Stereovision;Awards">
  <td class="paper-media-cell">
    <a href="images/DiachronicStereo_teaser.png">
      <div class="paper-media">
        <img src="images/DiachronicStereo_teaser.png" alt="Diachronic Stereo Matching teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Diachronic Stereo Matching for Multi-Date Satellite Imagery</papertitle>
    <br>
    Elías Masquil, Luca Savant Aira, <strong>Roger Marí</strong>, Thibaud Ehret, Pablo Musé, Gabriele Facciolo
    <br>
    <em>ISPRS Annals</em>, 2026
    <br>
    <a href="https://centreborelli.github.io/diachronic-stereo">project page</a>
    /
    <a href="https://arxiv.org/pdf/2601.22808">paper</a>
    /
    <a href="https://doi.org/10.5194/isprs-annals-XI-2-2026-483-2026">doi: 10.5194/isprs-annals-XI-2-2026-483-2026</a>
    <p></p>
    <p style="margin-bottom: 0;">
      Our diachronic stereo model produces accurate disparity maps from multi-date satellite images despite strong seasonal and illumination changes. We also release a benchmark of synchronic and diachronic image pairs for dense stereo matching in satellite imagery.
    </p>
    <p style="margin-top: 0; font-weight: bold; color: purple;">
    🏆 ISPRS Best Young Author Award - XXV ISPRS Congress 2026
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Stereovision">Stereovision</button>
      <button class="paper-tag" type="button" data-filter="Awards">Awards</button>
    </div>

  </td>
</tr>

<! LAND, 2026 >
<tr class="publication-row" data-tags="Generative AI;Medical Imaging" onmouseout="land_stop()" onmouseover="land_start()">
  <td class="paper-media-cell">
    <a href="images/LAND_after.mp4">
      <div class="paper-media">
        <img src="images/LAND_before.png" alt="LAND teaser">
        <div class="two" id="land_image">
          <video muted autoplay loop playsinline>
            <source src="images/LAND_after.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Anatomically Guided Latent Diffusion for High-Resolution 3D Chest CT Synthesis</papertitle>
    <br>
    Anna Oliveras, <strong>Roger Marí</strong>, Rafael Redondo, Oriol Guardià, Cynthia I. Ugwu, Ana Tost, Bhalaji Nagarajan, Carolina Migliorelli, Vicent Ribas, Petia Radeva
    <br>
    <em>Scientific Reports</em>, 2026
    <br>
    <a href="https://aolivtous.github.io/publications/land.html">project page</a>
    /
    <a href="https://www.nature.com/articles/s41598-026-51634-4">paper</a>
    /
    <a href="https://doi.org/10.1038/s41598-026-51634-4">doi: 10.1038/s41598-026-51634-4</a>
    <p></p>
    <p>
      LAND (Lung And Nodule Diffusion) is a latent diffusion model for synthetic chest CTs conditioned on lung and nodule masks. The generated volumes outperform state-of-the-art baselines and improve downstream nodule segmentation and classification.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Generative AI">Generative AI</button>
      <button class="paper-tag" type="button" data-filter="Medical Imaging">Medical Imaging</button>
    </div>
  </td>
</tr>

<! MExECON, 2026 >
<tr class="publication-row" data-tags="3D Reconstruction">
  <td class="paper-media-cell">
    <a href="images/MExECON_teaser.png">
      <div class="paper-media">
        <img src="images/MExECON_teaser.png" alt="MExECON teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>MExECON: Multi-View Extended Explicit Clothed Humans Optimized via Normal Integration</papertitle>
    <br>
    Fulden Ece Uğur, Rafael Redondo, Albert Barreiro, Stefan Hristov, <strong>Roger Marí</strong>
    <br>
    <em>VISAPP</em>, 2026
    <br>
    <a href="https://arxiv.org/pdf/2508.15500">paper</a>
    /
    <a href="https://github.com/multimedia-eurecat/MExECON">code</a>
    /
    <a href="https://doi.org/10.5220/0014402400004084">doi: 10.5220/0014402400004084</a>
    <p></p>
    <p>
      We reconstruct clothed human avatars from sparse RGB images. MExECON extends the single-view method
      <a href="https://xiuyuliang.cn/econ/">ECON (CVPR 2023)</a>
      to an arbitrary number of viewpoints, improving geometry and pose estimation without requiring network retraining.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>

<! ShinyNeRF, 2026 >
<tr class="publication-row" data-tags="3D Reconstruction;Neural Rendering;Awards" onmouseout="shinynerf_stop()" onmouseover="shinynerf_start()">
  <td class="paper-media-cell">
    <a href="images/ShinyNeRF_after.mp4">
      <div class="paper-media">
        <img src="images/ShinyNeRF_before.png" alt="ShinyNeRF teaser">
        <div class="two" id="shinynerf_image">
          <video muted autoplay loop playsinline>
            <source src="images/ShinyNeRF_after.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>ShinyNeRF: Digitizing Anisotropic Appearance in Neural Radiance Fields</papertitle>
    <br>
    Albert Barreiro, <strong>Roger Marí</strong>, Rafael Redondo, Gloria Haro, Carles Bosch
    <br>
    <em>ISPRS Archives</em>, 2026
    <br>
    <a href="https://multimedia-eurecat.github.io/ShinyNeRF/">project page</a>
    /
    <a href="https://isprs-archives.copernicus.org/articles/XLVIII-2-W12-2026/33/2026/isprs-archives-XLVIII-2-W12-2026-33-2026.pdf">paper</a>
    /
    <a href="https://github.com/multimedia-eurecat/ShinyNeRF">code</a>
    /
    <a href="https://doi.org/10.5194/isprs-archives-XLVIII-2-W12-2026-33-2026">doi: 10.5194/isprs-archives-XLVIII-2-W12-2026-33-2026</a>
    <p></p>
    <p style="margin-bottom: 0;">
      ShinyNeRF advances NeRF-based 3D digitization of specular surfaces by physically modeling isotropic and anisotropic reflections using interpretable material and geometric parameters, thereby enabling anisotropic material editing.
    </p>
    <p style="margin-top: 0; font-weight: bold; color: purple;">
    🏆 Best Paper Award - 2026 ISPRS / CIPA 3D-ARCH Workshop
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
      <button class="paper-tag" type="button" data-filter="Awards">Awards</button>
    </div>
  </td>
</tr>

<! S-EO Dataset: Geometry-Aware Shadow Detection, 2025 >
<tr class="publication-row" data-tags="Earth Observation;3D Reconstruction;Neural Rendering">
  <td class="paper-media-cell">
    <a href="images/ShadowDataset_teaser.png">
      <div class="paper-media">
        <img src="images/ShadowDataset_teaser.png" alt="S-EO dataset teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>S-EO: A Large-Scale Dataset for Geometry-Aware Shadow Detection in Remote Sensing Applications</papertitle>
    <br>
    Elías Masquil, <strong>Roger Marí</strong>, Thibaud Ehret, Enric Meinhardt-Llopis, Pablo Musé, Gabriele Facciolo
    <br>
    <em>CVPR Workshops</em>, 2025
    <br>
    <a href="https://centreborelli.github.io/shadow-eo/">project page</a>
    /
    <a href="https://openaccess.thecvf.com/content/CVPR2025W/EarthVision/papers/Masquil_S-EO_A_Large-Scale_Dataset_for_Geometry-Aware_Shadow_Detection_in_Remote_CVPRW_2025_paper.pdf">paper</a>
    /
    <a href="https://huggingface.co/datasets/emasquil/shadow-eo">data</a>
    /
    <a href="https://doi.org/10.1109/CVPRW67362.2025.00224">doi: 10.1109/CVPRW67362.2025.00224</a>
    <p></p>
    <p>
      This new dataset comprises multi-view satellite images (PAN and RGB), corresponding vegetation and shadow masks, bundle-adjusted RPC camera models and ground-truth DSMs for 702 distinct geographic areas of 500x500 m each across three U.S. cities.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
    </div>
  </td>
</tr>

<! Latent Diffusion for Conditional Generation of Aerial Imagery, 2025 >
<tr class="publication-row" data-tags="Generative AI;Earth Observation" onmouseout="mapsLDM_stop()" onmouseover="mapsLDM_start()">
  <td class="paper-media-cell">
    <a href="images/mapsLDM_teaser.png">
      <div class="paper-media">
        <img src="images/mapsLDM_real.png" alt="MapsLDM real aerial image">
        <div class="two" id="mapsLDM_image">
          <img src="images/mapsLDM_synthetic.png" alt="MapsLDM synthetic aerial image">
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Latent Diffusion Approaches for Conditional Generation of Aerial Imagery: A Study</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Rafael Redondo
    <br>
    <em>IPOL</em>, 2025
    <br>
    <a href="https://www.ipol.im/pub/art/2025/580/">paper</a>
    /
    <a href="https://ipolcore.ipol.im/demo/clientApp/demo.html?id=580">demo</a>
    /
    <a href="https://github.com/rogermm14/ldm-maps-MLBriefs2024">code</a>
    /
    <a href="https://doi.org/10.5201/ipol.2025.580">doi: 10.5201/ipol.2025.580</a>
    <p></p>
    <p>
      We evaluate the fidelity and realism of RGB aerial images generated by different architectural variants
      of a latent diffusion model conditioned on semantic maps.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Generative AI">Generative AI</button>
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
    </div>
  </td>
</tr>

<! Specularity in NeRFs: A Comparative Study of Ref-NeRF and NRFF, 2025 >
<tr class="publication-row" data-tags="3D Reconstruction;Neural Rendering">
  <td class="paper-media-cell">
    <a href="images/SpecularityNeRFs_teaser.png">
      <div class="paper-media">
        <img src="images/SpecularityNeRFs_teaser.png" alt="Specularity in NeRFs review teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Specularity in NeRFs: A Comparative Study of Ref-NeRF and NRFF</papertitle>
    <br>
    Albert Barreiro, <strong>Roger Marí‬</strong>, Rafael Redondo, Gloria Haro, Carles Bosch, David Berga
    <br>
    <em>IPOL</em>, 2025
    <br>
    <a href="https://www.ipol.im/pub/art/2025/562/">paper</a>
    /
    <a href="https://ipolcore.ipol.im/demo/clientApp/demo.html?id=562">demo</a>
    /
    <a href="https://doi.org/10.5201/ipol.2025.562">doi: 10.5201/ipol.2025.562</a>
    <p></p>
    <p>
      We evaluate the fidelity and realism of different NeRF architectures for modeling specular surfaces,
      comparing <a href="https://dorverbin.github.io/refnerf/">Ref-NeRF</a> and <a href="https://imkanghan.github.io/projects/NRFF/main">NRFF</a> on a synthetic dataset with specular reflections.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
    </div>
  </td>
</tr>

<! Characterization of Synthetic Lung Nodules in Conditional Latent Diffusion of Chest CT Scans, 2024 >
<tr class="publication-row" data-tags="Generative AI; Medical Imaging" onmouseout="chestCT2D_stop()" onmouseover="chestCT2D_start()">
  <td class="paper-media-cell">
    <a href="images/LDM_chestCT2d_teaser.png">
      <div class="paper-media">
        <img src="images/LDM_chestCT2d_1.png" alt="Chest CT synthetic 2D image">
        <div class="two" id="chestCT2D_image">
          <img src="images/LDM_chestCT2d_2.png" alt="Chest CT synthetic 2D image">
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Characterization of Synthetic Lung Nodules in Conditional Latent Diffusion of Chest CT Scans</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Paula Subías-Beltrán, Carla Pitarch, Mar Galofré, Rafael Redondo
    <br>
    <em>Artificial Intelligence Research and Development</em>, 2024
    <br>
    <a href="https://www.researchgate.net/profile/Roger-Mari/publication/384480928_Characterization_of_Synthetic_Lung_Nodules_in_Conditional_Latent_Diffusion_of_Chest_CT_Scans/links/67dbff0172f7f37c3e74ea6a/Characterization-of-Synthetic-Lung-Nodules-in-Conditional-Latent-Diffusion-of-Chest-CT-Scans.pdf">paper</a>
    /
    <a href="https://github.com/multimedia-eurecat/LatentDiffusion-2DChestCT-CCIA24">code</a>
    /
    <a href="https://doi.org/10.5281/zenodo.19053504">data</a>
    /
    <a href="https://doi.org/10.3233/FAIA240408">doi: 10.3233/FAIA240408</a>
    <p></p>
    <p>
      We generate synthetic 2D chest CT imagery using a conditional latent diffusion model guided by bounding-box masks and attribute embeddings.
We analyze how well the model controls lung nodule placement and characteristics, highlighting strengths and biases.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Generative AI">Generative AI</button>
      <button class="paper-tag" type="button" data-filter="Medical Imaging">Medical Imaging</button>
    </div>
  </td>
</tr>

<! VaxNeRF Review, 2024 >
<tr class="publication-row" data-tags="3D Reconstruction;Neural Rendering">
  <td class="paper-media-cell">
    <a href="images/VaxNeRF_teaser.png">
      <div class="paper-media">
        <img src="images/VaxNeRF_teaser.png" alt="VaxNeRF review teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Accelerating NeRF with the Visual Hull</papertitle>
    <br>
    <strong>Roger Marí</strong>
    <br>
    <em>IPOL</em>, 2024
    <br>
    <a href="https://www.ipol.im/pub/art/2024/553/">paper</a>
    /
    <a href="https://ipolcore.ipol.im/demo/clientApp/demo.html?id=553">demo</a>
    /
    <a href="https://doi.org/10.5201/ipol.2024.553">doi: 10.5201/ipol.2024.553</a>
    <p></p>
    <p>
      This paper reviews <a href="https://github.com/naruya/VaxNeRF">VaxNeRF</a>. NeRF-based rendering is accelerated by restricting sampling to the visual hull, the maximal volume consistent with multi-view object silhouettes.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>

<! Radar Fields, 2024 >
<tr class="publication-row" data-tags="Earth Observation;3D Reconstruction;Neural Rendering">
  <td class="paper-media-cell">
    <a href="images/RadarFields_full.png">
      <div class="paper-media">
        <img src="images/RadarFields_teaser.png" alt="Radar Fields teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Radar Fields: An Extension of Radiance Fields to SAR</papertitle>
    <br>
    Thibaud Ehret, <strong>Roger Marí</strong>, Dawa Derksen, Nicolas Gasnier, Gabriele Facciolo
    <br>
    <em>CVPR Workshops</em>, 2024
    <br>
    <a href="https://openaccess.thecvf.com/content/CVPR2024W/EarthVision/papers/Ehret_Radar_Fields_An_Extension_of_Radiance_Fields_to_SAR_CVPRW_2024_paper.pdf">paper</a>
    /
    <a href="https://doi.org/10.1109/CVPRW63382.2024.00061">doi: 10.1109/CVPRW63382.2024.00061</a>
    <p></p>
    <p>
      Despite the important differences between optical and synthetic aperture radar (SAR) image formation models, we show that radiance fields can be extended to radar images.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
    </div>
  </td>
</tr>


<! Pansharpening NeRF, 2024 >
<tr class="publication-row" data-tags="Earth Observation;Neural Rendering;3D Reconstruction">
  <td class="paper-media-cell">
    <a href="images/pansharpenNeRF_teaser.png">
      <div class="paper-media">
        <img src="images/pansharpenNeRF_teaser.png" alt="Pseudo Pansharpening NeRF teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Pseudo Pansharpening NeRF for Satellite Image Collections</papertitle>
    <br>
    Emilie Pic, Thibaud Ehret, Gabriele Facciolo, <strong>Roger Marí‬</strong>
    <br>
    <em>IGARSS</em>, 2024
    <br>
    <a href="https://hal.science/hal-05073893/document">paper</a>
    /
    <a href="https://doi.org/10.1109/IGARSS53475.2024.10641439">doi: 10.1109/IGARSS53475.2024.10641439</a>
    <p></p>
    <p>
      EO-NeRF is extended to handle high-res panchromatic (PAN) and low-res multispectral (MS) inputs, eliminating the need for separate pansharpening. The resulting model can render pansharpened image surrogates with high-res color information for each input viewpoint.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>

<! DiffNeRF, 2024 >
<tr class="publication-row" data-tags="Neural Rendering;3D Reconstruction" onmouseout="diffnerf_stop()" onmouseover="diffnerf_start()">
  <td class="paper-media-cell">
    <a href="images/diffnerf_teaser.png">
      <div class="paper-media">
        <img src="images/diffnerf_before.png" alt="DiffNeRF before">
        <div class="two" id="diffnerf_image">
          <img src="images/diffnerf_after.png" alt="DiffNeRF after">
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>A Generic and Flexible Regularization Framework for NeRFs</papertitle>
    <br>
    Thibaud Ehret, <strong>Roger Marí‬</strong>, Gabriele Facciolo
    <br>
    <em>WACV</em>, 2024
    <br>
    <a href="https://openaccess.thecvf.com/content/WACV2024/papers/Ehret_A_Generic_and_Flexible_Regularization_Framework_for_NeRFs_WACV_2024_paper.pdf">paper</a>
    /
    <a href="https://github.com/tehret/diffnerf">code</a>
    /
    <a href="data/DiffNeRF_poster.pdf">poster</a>
    /
    <a href="https://doi.org/10.1109/WACV57701.2024.00306">doi: 10.1109/WACV57701.2024.00306</a>
    <p></p>
    <p>
      We propose a generic regularization framework for NeRF based on differential geometry that outperforms previous state-of-the-art methods with only three input views. We compare our approach with
      <a href="https://m-niemeyer.github.io/regnerf/">RegNeRF (CVPR 2022)</a>.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>

<! EO-NeRF, 2023 >
<tr class="publication-row" data-tags="Earth Observation;3D Reconstruction;Neural Rendering" onmouseout="eonerf_stop()" onmouseover="eonerf_start()">
  <td class="paper-media-cell">
    <a href="images/EONeRF_after.mp4">
      <div class="paper-media">
        <img src="images/EONeRF_before.png" alt="EO-NeRF before">
        <div class="two" id="eonerf_image">
          <video muted autoplay loop playsinline>
            <source src="images/EONeRF_after.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Multi-Date Earth Observation NeRF: The Detail Is in the Shadows</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Gabriele Facciolo, Thibaud Ehret
    <br>
    <em>CVPR Workshops</em>, 2023
    <br>
    <a href="https://rogermm14.github.io/eonerf/">project page</a>
    /
    <a href="https://openaccess.thecvf.com/content/CVPR2023W/EarthVision/papers/Mari_Multi-Date_Earth_Observation_NeRF_The_Detail_Is_in_the_Shadows_CVPRW_2023_paper.pdf">paper</a>
    /
    <a href="https://github.com/rogermm14/eonerf_code">code</a>
    /
    <a href="data/EONeRF_poster.pdf">poster</a>
    /
    <a href="https://doi.org/10.1109/CVPRW59228.2023.00197">doi: 10.1109/CVPRW59228.2023.00197</a>
    <p></p>
    <p>
      We present EO-NeRF, which reveals scene geometry from multi-date satellite images with an unprecedented level of detail. We propose a geometrically consistent shadow model and a radiometric decomposition of the scene adapted to pansharpened satellite images.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
    </div>
  </td>
</tr>

<! PhD Thesis: Applications of Multi-Image Remote Sensing, 2022 >
<tr class="publication-row" data-tags="PhD Thesis">
  <td class="paper-media-cell">
    <a href="https://hal.science/tel-04143750/">
      <div class="paper-media">
        <img src="images/PhDThesis_teaser.png" alt="PhD thesis teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Applications of Multi-Image Remote Sensing</papertitle>
    <br>
    <strong>Roger Marí‬</strong>
    <br>
    <em>PhD Thesis</em>, 2022
    <br>
    <a href="https://hal.science/tel-04143750/">manuscript</a>
    /
    <a href="https://www.theses.fr/2022UPASM045">NNT: 2022UPASM045</a>
    <p></p>
    <p>
      This thesis investigates 3D reconstruction from collections of high-resolution satellite images. The first part examines the mathematical modeling of satellite acquisition geometry, and the second part explores several applications of multi-image remote sensing.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="PhD Thesis">PhD Thesis</button>
    </div>
  </td>
</tr>


<! Disparity Estimation Networks for Remote Sensing, 2022 >
<tr class="publication-row" data-tags="Earth Observation;Stereovision;3D Reconstruction;Awards">
  <td class="paper-media-cell">
    <a href="images/Disparity2022_teaser.png">
      <div class="paper-media">
        <img src="images/Disparity2022_teaser.png" alt="Disparity estimation teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Disparity Estimation Networks for Aerial and High-Resolution Satellite Images: A Review</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Thibaud Ehret, Gabriele Facciolo
    <br>
    <em>IPOL</em>, 2022
    <br>
    <a href="https://www.ipol.im/pub/art/2022/435/">paper</a>
    /
    <a href="https://ipolcore.ipol.im/demo/clientApp/demo.html?id=435">demo</a>
    /
    <a href="https://doi.org/10.5201/ipol.2022.435">doi: 10.5201/ipol.2022.435</a>
    <p></p>
    <p style="margin-bottom: 0;">
      We evaluate the performance of the deep learning architectures
      <a href="https://github.com/JiaRenChang/PSMNet">PSM (CVPR 2018)</a>
      and
      <a href="https://github.com/gengshan-y/high-res-stereo">HSM (CVPR 2019)</a>
      for disparity estimation on high-resolution satellite images.
    </p>
    <p style="margin-top: 0; font-weight: bold; color: purple;">
    🏆 Best Student Paper Award - 2022 IPOL MLBriefs Workshop
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="Stereovision">Stereovision</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Awards">Awards</button>
    </div>
  </td>
</tr>


<! SatNeRF, 2022 >
<tr class="publication-row" data-tags="Earth Observation;3D Reconstruction;Neural Rendering">
  <td class="paper-media-cell">
    <a href="images/SatNeRF_teaser2.png">
      <div class="paper-media">
        <img src="images/SatNeRF_teaser2.png" alt="Sat-NeRF teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Sat-NeRF: Learning Multi-View Satellite Photogrammetry With Transient Objects and Shadow Modeling Using RPC Cameras</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Gabriele Facciolo, Thibaud Ehret
    <br>
    <em>CVPR Workshops</em>, 2022
    <br>
    <a href="https://centreborelli.github.io/satnerf/">project page</a>
    /
    <a href="https://openaccess.thecvf.com/content/CVPR2022W/EarthVision/papers/Mari_Sat-NeRF_Learning_Multi-View_Satellite_Photogrammetry_With_Transient_Objects_and_Shadow_CVPRW_2022_paper.pdf">paper</a>
    /
    <a href="https://github.com/centreborelli/satnerf">code</a>
    /
    <a href="data/SatNeRF_poster.pdf">poster</a>
    /
    <a href="https://doi.org/10.1109/CVPRW56347.2022.00137">doi: 10.1109/CVPRW56347.2022.00137</a>
    <p></p>
    <p>
      Sat-NeRF is the first work in neural rendering for multi-date satellite images to demonstrate quantitatively convincing results in terms of surface reconstruction.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
      <button class="paper-tag" type="button" data-filter="Neural Rendering">Neural Rendering</button>
    </div>
  </td>
</tr>

<! L1B+, 2022 >
<tr class="publication-row" data-tags="Earth Observation;Camera Calibration;Stereovision;3D Reconstruction" onmouseout="l1bplus_stop()" onmouseover="l1bplus_start()">
  <td class="paper-media-cell">
    <a href="images/L1B+_teaser.png">
      <div class="paper-media">
        <img src="images/L1B+_before.png" alt="L1B+ before">
        <div class="two" id="l1bplus_image">
          <img src="images/L1B+_after.png" alt="L1B+ after">
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>L1B+: A Perfect Sensor Localization Model for Simple Satellite Stereo Reconstruction from Push-Frame Image Strips</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Thibaud Ehret, ‪Jérémy Anger, Carlo de Franchis, Gabriele Facciolo
    <br>
    <em>ISPRS Annals</em>, 2022
    <br>
    <a href="https://isprs-annals.copernicus.org/articles/V-1-2022/137/2022/isprs-annals-V-1-2022-137-2022.pdf">paper</a>
    /
    <a href="data/L1B+_poster.pdf">poster</a>
    /
    <a href="https://doi.org/10.5194/isprs-annals-V-1-2022-137-2022">doi: 10.5194/isprs-annals-V-1-2022-137-2022</a>
    <p></p>
    <p>
      We emulate a perfect sensor to generate a single image from a fragmented push-frame strip. The resulting product simplifies large-scale 3D modeling from push-frame imagery.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="Camera Calibration">Camera Calibration</button>
      <button class="paper-tag" type="button" data-filter="Stereovision">Stereovision</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>

<! Bundle Adjustment for RPCs, 2021 >
<tr class="publication-row" data-tags="Earth Observation;Camera Calibration;Stereovision;3D Reconstruction">
  <td class="paper-media-cell">
    <a href="images/BAipol_teaser.png">
      <div class="paper-media">
        <img src="images/BAipol_teaser.png" alt="Bundle Adjustment RPC refinement teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>A Generic Bundle Adjustment Methodology for Indirect RPC Model Refinement of Satellite Imagery</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Carlo de Franchis, Enric Meinhardt-Llopis, ‪Jérémy Anger, Gabriele Facciolo
    <br>
    <em>IPOL</em>, 2021
    <br>
    <a href="https://www.ipol.im/pub/art/2021/352/">paper</a>
    /
    <a href="https://ipolcore.ipol.im/demo/clientApp/demo.html?id=352">demo</a>
    /
    <a href="https://github.com/centreborelli/sat-bundleadjust">code</a>
    /
    <a href="https://doi.org/10.5201/ipol.2021.352">doi: 10.5201/ipol.2021.352</a>
    <p></p>
    <p>
      We propose a generic bundle adjustment method for satellite multi-view stereo pipelines. The RPC camera models of the input views are refined with a rotation that compensates localization errors related to the attitude angles encoding the satellite orientation.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="Camera Calibration">Camera Calibration</button>
      <button class="paper-tag" type="button" data-filter="Stereovision">Stereovision</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>

<! Stockpile Volume Estimation from SkySat Time Series, 2021 >
<tr class="publication-row" data-tags="Earth Observation;Camera Calibration;Stereovision;3D Reconstruction" onmouseout="stockpile_stop()" onmouseover="stockpile_start()">
  <td class="paper-media-cell">
    <a href="images/stockpile_before.png">
      <div class="paper-media">
        <img src="images/stockpile_before.png" alt="Stockpile before">
        <div class="two" id="stockpile_image">
          <video muted autoplay loop playsinline>
            <source src="images/stockpile_after.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Automatic Stockpile Volume Monitoring Using Multi-View Stereo from SkySat Imagery</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Carlo de Franchis, Enric Meinhardt-Llopis, ‪Gabriele Facciolo
    <br>
    <em>IGARSS</em>, 2021
    <br>
    <a href="https://arxiv.org/pdf/2103.00945.pdf">paper</a>
    /
    <a href="https://doi.org/10.1109/IGARSS47720.2021.9554482">doi: 10.1109/IGARSS47720.2021.9554482</a>
    <p></p>
    <p>
      The RPC camera models of a time series of SkySat acquisitions are refined and used to compute a surface model for each date, which is used to measure the stockpile volume.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="Camera Calibration">Camera Calibration</button>
      <button class="paper-tag" type="button" data-filter="Stereovision">Stereovision</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>


<! Robust Rational Polynomial Camera Modelling, 2021 >
<tr class="publication-row" data-tags="Earth Observation;Camera Calibration">
  <td class="paper-media-cell">
    <a href="images/rpcfit_teaser.png">
      <div class="paper-media">
        <img src="images/rpcfit_teaser.png" alt="RPC fitting teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Robust Rational Polynomial Camera Modelling for SAR and Pushbroom Imaging</papertitle>
    <br>
    Roland Akiki, <strong>Roger Marí‬</strong>, Carlo de Franchis, Jean-Michel Morel, ‪Gabriele Facciolo
    <br>
    <em>IGARSS</em>, 2021
    <br>
    <a href="https://arxiv.org/pdf/2102.13423.pdf">paper</a>
    /
    <a href="https://github.com/centreborelli/rpcfit">code</a>
    /
    <a href="https://doi.org/10.1109/IGARSS47720.2021.9554583">doi: 10.1109/IGARSS47720.2021.9554583</a>
    <p></p>
    <p>
      We describe a terrain-independent algorithm that derives an RPC camera model from a set of 3D-2D point correspondences using a regularized least-squares fit.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="Camera Calibration">Camera Calibration</button>
    </div>
  </td>
</tr>

<! To Bundle Adjust or Not, 2019 >
<tr class="publication-row" data-tags="Earth Observation;Camera Calibration;Stereovision;3D Reconstruction">
  <td class="paper-media-cell">
    <a href="images/ToBAorNot_teaser.png">
      <div class="paper-media">
        <img src="images/ToBAorNot_teaser.png" alt="Bundle adjustment comparison teaser">
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>To Bundle Adjust or Not: A Comparison of Relative Geolocation Correction Strategies for Satellite Multi-View Stereo</papertitle>
    <br>
    <strong>Roger Marí‬</strong>, Carlo de Franchis, Enric Meinhardt-Llopis, ‪Gabriele Facciolo
    <br>
    <em>ICCV Workshops</em>, 2019
    <br>
    <a href="https://rogermm14.github.io/bundle-adjust-or-not/">project page</a>
    /
    <a href="https://openaccess.thecvf.com/content_ICCVW_2019/papers/3DRW/Mari_To_Bundle_Adjust_or_Not_A_Comparison_of_Relative_Geolocation_ICCVW_2019_paper.pdf">paper</a>
    /
    <a href="data/ToBAorNot_poster.pdf">poster</a>
    /
    <a href="https://doi.org/10.1109/ICCVW.2019.00274">doi: 10.1109/ICCVW.2019.00274</a>
    <p></p>
    <p>
      This work investigates and compares different relative geolocation correction techniques for multi-view stereo pipelines for satellite images. We assess the impact on the output geometry.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Earth Observation">Earth Observation</button>
      <button class="paper-tag" type="button" data-filter="Camera Calibration">Camera Calibration</button>
      <button class="paper-tag" type="button" data-filter="Stereovision">Stereovision</button>
      <button class="paper-tag" type="button" data-filter="3D Reconstruction">3D Reconstruction</button>
    </div>
  </td>
</tr>

<tr class="publication-row" data-tags="Camera Calibration" onmouseout="radial_stop()" onmouseover="radial_start()">
  <td class="paper-media-cell">
    <a href="images/radial_teaser.png">
      <div class="paper-media">
        <img src="images/radial_before.png" alt="Radial calibration before">
        <div class="two" id="radial_image">
          <img src="images/radial_after.png" alt="Radial calibration after">
        </div>
      </div>
    </a>
  </td>
  <td class="paper-info-cell">
    <papertitle>Deep Single Image Camera Calibration with Radial Distortion</papertitle>
    <br>
    Manuel López-Antequera, <strong>Roger Marí‬</strong>, Pau Gargallo, Yubin Kuang, Javier Gonzalez-Jimenez, Gloria Haro
    <br>
    <em>CVPR</em>, 2019
    <br>
    <a href="https://openaccess.thecvf.com/content_CVPR_2019/papers/Lopez_Deep_Single_Image_Camera_Calibration_With_Radial_Distortion_CVPR_2019_paper.pdf">paper</a>
    /
    <a href="https://openaccess.thecvf.com/content_CVPR_2019/supplemental/Lopez_Deep_Single_Image_CVPR_2019_supplemental.pdf">supp</a>
    /
    <a href="https://doi.org/10.1109/CVPR.2019.01209">doi: 10.1109/CVPR.2019.01209</a>
    <p></p>
    <p>
      We present a deep learning method to predict extrinsic (tilt and roll) and intrinsic (focal length and radial distortion) parameters from a single image. We use a parameterization that is better suited for learning than directly predicting the camera parameters.
    </p>
    <div class="paper-tags">
      <button class="paper-tag" type="button" data-filter="Camera Calibration">Camera Calibration</button>
    </div>
  </td>
</tr>
  
</tbody>
</table>
</div>

`;
