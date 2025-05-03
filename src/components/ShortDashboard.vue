<template>
  <div class="collapse show dash-content" id="dashtoggle">
    <div class="container-fluid">
      <!-- start page title -->
      <div class="row">
        <div class="col-12">
          <div
            class="page-title-box d-flex align-items-center justify-content-between"
          >
            <h4 class="mb-0 sub-title">Welcome !</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                <li class="breadcrumb-item page-head">
                  <a href="javascript: void(0);">Dashboard</a>
                </li>
                <li class="breadcrumb-item page-head active">Welcome !</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <!-- end page title -->

      <!-- start dash info -->
      <div class="row">
        <div class="col-xl-12">
          <div class="card dash-header-box shadow-none border-0">
            <div class="card-body p-0">
              <div class="row row-cols-xxl-6 row-cols-md-3 row-cols-1 g-0">
                <div class="col">
                  <div class="mt-md-0 py-3 px-4 mx-2">
                    <p class="text-white-50 mb-2 text-truncate">
                      Campaign Sent
                    </p>
                    <h3 class="text-white mb-0">197</h3>
                  </div>
                </div>
                <!-- end col -->

                <div class="col">
                  <div class="mt-3 mt-md-0 py-3 px-4 mx-2">
                    <p class="text-white-50 mb-2 text-truncate">
                      Annual Profit
                    </p>
                    <h3 class="text-white mb-0">$489.4k</h3>
                  </div>
                </div>
                <!-- end col -->

                <div class="col">
                  <div class="mt-3 mt-md-0 py-3 px-4 mx-2">
                    <p class="text-white-50 mb-2 text-truncate">
                      Lead Coversation
                    </p>
                    <h3 class="text-white mb-0">32.89%</h3>
                  </div>
                </div>
                <!-- end col -->

                <div class="col">
                  <div class="mt-3 mt-md-0 py-3 px-4 mx-2">
                    <p class="text-white-50 mb-2 text-truncate">
                      Sales Forecast
                    </p>
                    <h3 class="text-white mb-0">75.35%</h3>
                  </div>
                </div>
                <!-- end col -->

                <div class="col">
                  <div class="mt-3 mt-lg-0 py-3 px-4 mx-2">
                    <p class="text-white-50 mb-2 text-truncate">
                      Daily Average Income
                    </p>
                    <h3 class="text-white mb-0">$1,596.5</h3>
                  </div>
                </div>
                <!-- end col -->

                <div class="col">
                  <div class="mt-3 mt-lg-0 py-3 px-4 mx-2">
                    <p class="text-white-50 mb-2 text-truncate">Annual Deals</p>
                    <h3 class="text-white mb-0">2,659</h3>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end dash info -->
    </div>
  </div>
  <!-- start dash troggle-icon -->
  <div>
    <a
      class="dash-troggle-icon"
      id="dash-troggle-icon"
      data-bs-toggle="collapse"
      href="#dashtoggle"
      aria-expanded="true"
      aria-controls="dashtoggle"
    >
      <i class="bx bx-up-arrow-alt"></i>
    </a>
  </div>
  <!-- end dash troggle-icon -->
</template>
