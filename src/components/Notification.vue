<template>
         <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="bx bx-bell icon-sm"></i>
            <span class="noti-dot bg-danger rounded-pill">3</span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
            aria-labelledby="page-header-notifications-dropdown"
          >
            <div class="p-3">
              <div class="row align-items-center">
                <div class="col">
                  <h5 class="m-0 font-size-15">Notifications</h5>
                </div>
                <div class="col-auto">
                  <a href="javascript:void(0);" class="small">
                    Mark all as read</a
                  >
                </div>
              </div>
            </div>
            <div data-simplebar style="max-height: 250px">
              <h6 class="dropdown-header bg-light">New</h6>
              <a href="#" class="text-reset notification-item">
                <div class="d-flex border-bottom align-items-start">
                  <div class="flex-shrink-0">
                    <img
                      src="../assets/images/users/avatar-3.jpg"
                      class="me-3 rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Justin Verduzco</h6>
                    <div class="text-muted">
                      <p class="mb-1 font-size-13">
                        Your task changed an issue from "In Progress" to
                        <span class="badgebg-success-subtle text-success"
                          >Review</span
                        >
                      </p>
                      <p class="mb-0 font-size-10 text-uppercase fw-bold">
                        <i class="mdi mdi-clock-outline"></i> 1 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="text-reset notification-item">
                <div class="d-flex border-bottom align-items-start">
                  <div class="flex-shrink-0">
                    <div class="avatar-sm me-3">
                      <span
                        class="avatar-title bg-primary rounded-circle font-size-16"
                      >
                        <i class="uil-shopping-basket"></i>
                      </span>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">New order has been placed</h6>
                    <div class="text-muted">
                      <p class="mb-1 font-size-13">
                        Open the order confirmation or shipment confirmation.
                      </p>
                      <p class="mb-0 font-size-10 text-uppercase fw-bold">
                        <i class="mdi mdi-clock-outline"></i> 5 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <h6 class="dropdown-header bg-light">Earlier</h6>
              <a href="#" class="text-reset notification-item">
                <div class="d-flex border-bottom align-items-start">
                  <div class="flex-shrink-0">
                    <div class="avatar-sm me-3">
                      <span
                        class="avatar-title bg-success-subtle text-success rounded-circle font-size-16"
                      >
                        <i class="uil-truck"></i>
                      </span>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Your item is shipped</h6>
                    <div class="text-muted">
                      <p class="mb-1 font-size-13">
                        Here is somthing that you might light like to know.
                      </p>
                      <p class="mb-0 font-size-10 text-uppercase fw-bold">
                        <i class="mdi mdi-clock-outline"></i> 1 day ago
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="#" class="text-reset notification-item">
                <div class="d-flex border-bottom align-items-start">
                  <div class="flex-shrink-0">
                    <img
                      src="../assets/images/users/avatar-4.jpg"
                      class="me-3 rounded-circle avatar-sm"
                      alt="user-pic"
                    />
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">Salena Layfield</h6>
                    <div class="text-muted">
                      <p class="mb-1 font-size-13">Yay ! Everything worked!</p>
                      <p class="mb-0 font-size-10 text-uppercase fw-bold">
                        <i class="mdi mdi-clock-outline"></i> 3 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="p-2 border-top d-grid">
              <a
                class="btn btn-sm btn-link font-size-14 btn-block text-center"
                href="javascript:void(0)"
              >
                <i class="uil-arrow-circle-right me-1"></i>
                <span>View More..</span>
              </a>
            </div>
          </div>
        </div>
</template>