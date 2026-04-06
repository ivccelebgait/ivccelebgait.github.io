document.addEventListener('DOMContentLoaded', () => {
  const teaserImages = [
    './static/images/examples_rgb/P0000005.jpg',
    './static/images/examples_rgb/P0000014.jpg',
    './static/images/examples_rgb/P0000054.jpg',
    './static/images/examples_rgb/P0000059.jpg',
    './static/images/examples_rgb/P0000173.jpg',
    './static/images/examples_rgb/P0000194.jpg',
    './static/images/examples_rgb/P0000245.jpg',
    './static/images/examples_rgb/P0000258.jpg',
    './static/images/examples_rgb/P0000263.jpg',
    './static/images/examples_rgb/P0000326.jpg',
    './static/images/examples_rgb/P0000327.jpg',
    './static/images/examples_rgb/P0000343.jpg',
    './static/images/examples_rgb/P0000362.jpg',
    './static/images/examples_rgb/P0000364.jpg',
    './static/images/examples_rgb/P0000415.jpg',
    './static/images/examples_rgb/P0000417.jpg',
    './static/images/examples_rgb/P0000497.jpg',
    './static/images/examples_rgb/P0000500.jpg',
    './static/images/examples_rgb/P0000521.jpg',
    './static/images/examples_rgb/P0000525.jpg',
    './static/images/examples_rgb/P0000543.jpg',
    './static/images/examples_rgb/P0000562.jpg',
    './static/images/examples_rgb/P0000570.jpg',
    './static/images/examples_rgb/P0000574.jpg',
    './static/images/examples_rgb/P0000585.jpg',
    './static/images/examples_rgb/P0000601.jpg',
    './static/images/examples_rgb/P0000654.jpg',
    './static/images/examples_rgb/P0000757.jpg',
    './static/images/examples_rgb/P0000773.jpg',
    './static/images/examples_rgb/P0000803.jpg',
    './static/images/examples_rgb/P0000838.jpg',
    './static/images/examples_rgb/P0000886.jpg',
    './static/images/examples_rgb/P0000896.jpg',
    './static/images/examples_rgb/P0000899.jpg',
    './static/images/examples_rgb/P0000939.jpg',
    './static/images/examples_rgb/P0000945.jpg',
    './static/images/examples_rgb/P0000948.jpg',
    './static/images/examples_rgb/P0001031.jpg',
    './static/images/examples_rgb/P0001045.jpg',
    './static/images/examples_rgb/P0001052.jpg',
    './static/images/examples_rgb/P0001072.jpg',
    './static/images/examples_rgb/P0001134.jpg',
    './static/images/examples_rgb/P0001171.jpg',
    './static/images/examples_rgb/P0001214.jpg',
    './static/images/examples_rgb/P0001267.jpg',
    './static/images/examples_rgb/P0001290.jpg',
    './static/images/examples_rgb/P0001296.jpg',
    './static/images/examples_rgb/P0001451.jpg',
    './static/images/examples_rgb/P0001464.jpg',
    './static/images/examples_rgb/P0001504.jpg',
    './static/images/examples_rgb/P0001523.jpg',
    './static/images/examples_rgb/P0001559.jpg',
    './static/images/examples_rgb/P0001570.jpg',
    './static/images/examples_rgb/P0001629.jpg',
    './static/images/examples_rgb/P0001630.jpg',
    './static/images/examples_rgb/P0001668.jpg',
    './static/images/examples_rgb/P0001674.jpg',
    './static/images/examples_rgb/P0001726.jpg',
    './static/images/examples_rgb/P0001756.jpg',
    './static/images/examples_rgb/P0001764.jpg',
    './static/images/examples_rgb/P0001806.jpg',
    './static/images/examples_rgb/P0001823.jpg',
    './static/images/examples_rgb/P0001865.jpg',
    './static/images/examples_rgb/P0001867.jpg',
    './static/images/examples_rgb/P0001876.jpg',
    './static/images/examples_rgb/P0001877.jpg',
    './static/images/examples_rgb/P0001886.jpg',
    './static/images/examples_rgb/P0001906.jpg',
    './static/images/examples_rgb/P0001937.jpg',
    './static/images/examples_rgb/P0001974.jpg',
    './static/images/examples_rgb/P0002002.jpg',
    './static/images/examples_rgb/P0002087.jpg',
    './static/images/examples_rgb/P0002158.jpg',
    './static/images/examples_rgb/P0002167.jpg',
    './static/images/examples_rgb/P0002170.jpg',
    './static/images/examples_rgb/P0002173.jpg',
    './static/images/examples_rgb/P0002175.jpg',
    './static/images/examples_rgb/P0002186.jpg',
    './static/images/examples_rgb/P0002282.jpg',
    './static/images/examples_rgb/P0002371.jpg',
    './static/images/examples_rgb/P0002705.jpg',
    './static/images/examples_rgb/P0002707.jpg',
    './static/images/examples_rgb/P0002713.jpg',
    './static/images/examples_rgb/P0002722.jpg',
    './static/images/examples_rgb/P0002788.jpg',
    './static/images/examples_rgb/P0002818.jpg',
    './static/images/examples_rgb/P0002832.jpg',
    './static/images/examples_rgb/P0002903.jpg',
    './static/images/examples_rgb/P0002911.jpg',
    './static/images/examples_rgb/P0002932.jpg',
    './static/images/examples_rgb/P0002974.jpg',
    './static/images/examples_rgb/P0002984.jpg',
    './static/images/examples_rgb/P0002989.jpg',
    './static/images/examples_rgb/P0003025.jpg',
    './static/images/examples_rgb/P0003033.jpg',
    './static/images/examples_rgb/P0003060.jpg',
    './static/images/examples_rgb/P0003064.jpg',
    './static/images/examples_rgb/P0003101.jpg',
    './static/images/examples_rgb/P0003105.jpg',
    './static/images/examples_rgb/P0003134.jpg',
    './static/images/examples_rgb/P0003265.jpg',
    './static/images/examples_rgb/P0003272.jpg',
    './static/images/examples_rgb/P0003299.jpg',
    './static/images/examples_rgb/P0003330.jpg',
    './static/images/examples_rgb/P0003335.jpg',
    './static/images/examples_rgb/P0003346.jpg',
    './static/images/examples_rgb/P0003437.jpg',
    './static/images/examples_rgb/P0003457.jpg',
    './static/images/examples_rgb/P0003459.jpg',
    './static/images/examples_rgb/P0003463.jpg',
    './static/images/examples_rgb/P0003466.jpg',
    './static/images/examples_rgb/P0003504.jpg',
    './static/images/examples_rgb/P0003510.jpg',
    './static/images/examples_rgb/P0003521.jpg',
    './static/images/examples_rgb/P0003560.jpg',
    './static/images/examples_rgb/P0003589.jpg',
    './static/images/examples_rgb/P0003590.jpg',
    './static/images/examples_rgb/P0003620.jpg',
    './static/images/examples_rgb/P0003631.jpg',
    './static/images/examples_rgb/P0003676.jpg',
    './static/images/examples_rgb/P0003680.jpg',
    './static/images/examples_rgb/P0003728.jpg',
    './static/images/examples_rgb/P0003764.jpg',
    './static/images/examples_rgb/P0003771.jpg',
    './static/images/examples_rgb/P0003826.jpg',
    './static/images/examples_rgb/P0003835.jpg',
    './static/images/examples_rgb/P0003856.jpg',
    './static/images/examples_rgb/P0003894.jpg',
    './static/images/examples_rgb/P0004003.jpg',
    './static/images/examples_rgb/P0004043.jpg',
    './static/images/examples_rgb/P0004090.jpg',
    './static/images/examples_rgb/P0004101.jpg',
    './static/images/examples_rgb/P0004120.jpg',
    './static/images/examples_rgb/P0004140.jpg',
    './static/images/examples_rgb/P0004155.jpg',
    './static/images/examples_rgb/P0004175.jpg',
    './static/images/examples_rgb/P0004212.jpg',
    './static/images/examples_rgb/P0004260.jpg',
    './static/images/examples_rgb/P0004334.jpg',
    './static/images/examples_rgb/P0004345.jpg',
    './static/images/examples_rgb/P0004351.jpg',
    './static/images/examples_rgb/P0004364.jpg',
    './static/images/examples_rgb/P0004393.jpg',
    './static/images/examples_rgb/P0004394.jpg',
    './static/images/examples_rgb/P0004416.jpg',
    './static/images/examples_rgb/P0004429.jpg',
    './static/images/examples_rgb/P0004451.jpg',
    './static/images/examples_rgb/P0004504.jpg'
  ];

  const carousel = document.getElementById("teaser-example-carousel");
  const track = document.getElementById("teaser-carousel-track");
  const counter = document.getElementById("teaser-carousel-counter");

  if (!carousel || !track) {
    return;
  }

  const pageSize = 6;
  const displayImages = teaserImages.slice(0, Math.floor(teaserImages.length / pageSize) * pageSize);
  const pages = [];

  for (let i = 0; i < displayImages.length; i += pageSize) {
    pages.push(displayImages.slice(i, i + pageSize));
  }

  if (pages.length === 0) {
    return;
  }

  const previewModal = document.createElement("div");
  previewModal.className = "teaser-preview-modal";
  previewModal.setAttribute("aria-hidden", "true");

  const previewDialog = document.createElement("div");
  previewDialog.className = "teaser-preview-dialog";
  previewDialog.setAttribute("role", "dialog");
  previewDialog.setAttribute("aria-modal", "true");
  previewDialog.setAttribute("aria-label", "Image preview");

  const previewClose = document.createElement("button");
  previewClose.className = "teaser-preview-close";
  previewClose.type = "button";
  previewClose.setAttribute("aria-label", "Close image preview");
  previewClose.innerHTML = "&times;";

  const previewImage = document.createElement("img");
  previewImage.className = "teaser-preview-image";
  previewImage.decoding = "async";

  previewDialog.appendChild(previewClose);
  previewDialog.appendChild(previewImage);
  previewModal.appendChild(previewDialog);
  document.body.appendChild(previewModal);

  let activePreviewTrigger = null;
  let previewTimerId = null;

  const clearPreviewTimer = () => {
    if (previewTimerId !== null) {
      window.clearTimeout(previewTimerId);
      previewTimerId = null;
    }
  };

  const openPreview = (src, alt, trigger = null) => {
    clearPreviewTimer();
    previewImage.src = src;
    previewImage.alt = alt;
    previewModal.classList.add("is-visible");
    previewModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("teaser-preview-open");
    activePreviewTrigger = trigger;
    stopAutoplay();
  };

  const closePreview = () => {
    clearPreviewTimer();
    previewModal.classList.remove("is-visible");
    previewModal.setAttribute("aria-hidden", "true");
    previewImage.removeAttribute("src");
    previewImage.alt = "";
    document.body.classList.remove("teaser-preview-open");
    if (activePreviewTrigger) {
      activePreviewTrigger.focus({ preventScroll: true });
      activePreviewTrigger = null;
    }
    startAutoplay();
  };

  const attachPreviewTrigger = (trigger, getPreviewData, options = {}) => {
    const { hoverDelay = null, ariaLabel = null } = options;

    trigger.tabIndex = 0;
    trigger.setAttribute("role", "button");
    if (ariaLabel) {
      trigger.setAttribute("aria-label", ariaLabel);
    }

    const openFromTrigger = () => {
      const { src, alt } = getPreviewData();
      openPreview(src, alt, trigger);
    };

    trigger.addEventListener("click", openFromTrigger);
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openFromTrigger();
      }
    });

    if (hoverDelay !== null) {
      trigger.addEventListener("mouseenter", () => {
        clearPreviewTimer();
        previewTimerId = window.setTimeout(() => {
          openFromTrigger();
        }, hoverDelay);
      });
      trigger.addEventListener("mouseleave", clearPreviewTimer);
      trigger.addEventListener("blur", clearPreviewTimer);
      trigger.addEventListener("pointerdown", clearPreviewTimer);
    }
  };

  const createPage = (pageImages, pageIndex, eager = false) => {
    const page = document.createElement("div");
    page.className = "teaser-carousel-page";
    page.setAttribute("role", "group");
    page.setAttribute("aria-label", `Carousel page ${pageIndex + 1}`);

    pageImages.forEach((src, imageIndex) => {
      const card = document.createElement("div");
      card.className = "teaser-card";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `CelebGait teaser example ${pageIndex * pageSize + imageIndex + 1}`;
      img.loading = eager ? "eager" : "lazy";
      img.decoding = "async";
      if (eager) {
        img.fetchPriority = "high";
      }

      attachPreviewTrigger(card, () => ({ src: img.src, alt: img.alt }), {
        ariaLabel: `Open large preview for ${img.alt}`
      });

      card.appendChild(img);
      page.appendChild(card);
    });

    return page;
  };

  const renderedPages = [pages[pages.length - 1], ...pages, pages[0]];
  renderedPages.forEach((pageImages, pageIndex) => {
    const realPageIndex = pageIndex === 0 ? pages.length - 1 : (pageIndex - 1) % pages.length;
    const shouldEagerLoad =
      pageIndex <= 2 || pageIndex >= renderedPages.length - 2;
    track.appendChild(createPage(pageImages, realPageIndex, shouldEagerLoad));
  });

  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  let currentPage = 0;
  let currentSlide = 1;
  let autoplayId = null;
  let isTransitioning = false;

  const updateCounter = () => {
    if (counter) {
      counter.textContent = `${currentPage + 1} / ${pages.length}`;
    }
  };

  const primeSlides = (slideIndex) => {
    const slideIndexesToPrime = new Set([
      0,
      1,
      2,
      renderedPages.length - 2,
      renderedPages.length - 1,
      slideIndex - 1,
      slideIndex,
      slideIndex + 1
    ]);

    slideIndexesToPrime.forEach((index) => {
      const slide = track.children[index];
      if (!slide) {
        return;
      }

      slide.querySelectorAll("img").forEach((img) => {
        img.loading = "eager";
        img.fetchPriority = "high";
      });
    });
  };

  const render = () => {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateCounter();
    primeSlides(currentSlide);
  };

  const setTrackTransition = (enabled) => {
    track.style.transition = enabled ? "transform 0.6s ease" : "none";
  };

  const jumpToSlide = (slideIndex) => {
    setTrackTransition(false);
    currentSlide = slideIndex;
    render();
    window.requestAnimationFrame(() => {
      setTrackTransition(true);
    });
  };

  const goToPage = (direction) => {
    if (isTransitioning) {
      return;
    }

    isTransitioning = true;
    currentPage = (currentPage + direction + pages.length) % pages.length;
    currentSlide += direction;
    render();
  };

  const startAutoplay = () => {
    if (previewModal.classList.contains("is-visible")) {
      return;
    }

    stopAutoplay();
    autoplayId = window.setInterval(() => {
      goToPage(1);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayId !== null) {
      window.clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToPage(-1);
      startAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToPage(1);
      startAutoplay();
    });
  }

  previewClose.addEventListener("click", closePreview);
  previewModal.addEventListener("click", (event) => {
    if (event.target === previewModal) {
      closePreview();
    }
  });
  previewDialog.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && previewModal.classList.contains("is-visible")) {
      closePreview();
    }
  });

  track.addEventListener("transitionend", (event) => {
    if (event.propertyName !== "transform") {
      return;
    }

    if (currentSlide === 0) {
      jumpToSlide(pages.length);
    } else if (currentSlide === pages.length + 1) {
      jumpToSlide(1);
    }

    isTransitioning = false;
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", startAutoplay);

  document.querySelectorAll(".challenge-card img").forEach((img) => {
    attachPreviewTrigger(img, () => ({ src: img.src, alt: img.alt }), {
      hoverDelay: 3000,
      ariaLabel: `Open large preview for ${img.alt}`
    });
  });

  setTrackTransition(false);
  render();
  window.requestAnimationFrame(() => {
    setTrackTransition(true);
  });
  startAutoplay();
});
