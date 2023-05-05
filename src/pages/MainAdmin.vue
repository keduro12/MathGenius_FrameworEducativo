<template>
    <!-- MENU START  -->
    <nav class="navbar navbar-expand-lg navbar-dark">
      <!-- NAV CONTAINER START -->
      <div class="container-fluid">
        <a href="" class="navbar-brand text-info fw-semibold fs-4">MathGeniu</a>

        <!-- NAV BUTTON  -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menuLateral"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- OFFCANVAS MAIN CONTAINER START -->
        <section
          class="offcanvas offcanvas-start"
          id="menuLateral"
          tabindex="-1"
        >
          <div class="offcanvas-header" data-bs-theme="dark">
            <h5 class="offcanvas-title text-info">EMPRINNOS</h5>
            <button
              class="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <!-- OFF CANVAS MENU LINKS  START-->
          <div
            class="offcanvas-body d-flex flex-column justify-content-between px-0"
          >
            <ul class="navbar-nav fs-5 justify-content-evenly">
              <li class="nav-item p-3 py-md-1">
                <a href="" class="nav-link">HOME</a>
              </li>
              <li class="nav-item p-3 py-md-1">
                <a href="" class="nav-link">PROJECTS</a>
              </li>
              <li class="nav-item p-3 py-md-1">
                <a href="" class="nav-link">ABOUT</a>
              </li>
              <li class="nav-item p-3 py-md-1">
                <a href="" class="nav-link">CONTACT</a>
              </li>
            </ul>
            <!-- enlaces redes sociales -->

            <div class="d-lg-none align-self-center py-3">
              <a href=""><i class="bi bi-twitter px-2 text-info fs-2"></i></a>
              <a href=""><i class="bi bi-facebook px-2 text-info fs-2"></i></a>
              <a href=""><i class="bi bi-github px-2 text-info fs-2"></i></a>
              <a href=""><i class="bi bi-whatsapp px-2 text-info fs-2"></i></a>
            </div>
          </div>
        </section>
        <!-- OFFCANVAS MAIN CONTAINER END  -->
      </div>
    </nav>
</template>

<script setup>
import {useUserStore} from "@/store/User.js"

const userStore = useUserStore();
</script>

<style  scoped>

nav,
    .offcanvas {
      background-color: #0277BD;
    }
    .navbar-toggler {
      border: none;
    }
    .navbar-toggler:focus {
      outline: none;
      box-shadow: none;
    }

    @media (max-width: 768px) {
      .navbar-nav > li:hover {
        background-color: #0dcaf0;
      }
    }
</style>