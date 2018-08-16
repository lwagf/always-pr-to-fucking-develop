**FROM:**

`
<button class="btn btn-sm select-menu-button js-menu-target branch" type="button" aria-haspopup="true" aria-expanded="false">
  <i>base:</i>
  <span class="js-select-button css-truncate css-truncate-target" title="base: master">master</span>
</button>
`

**TO:**

`
<button class="btn btn-sm select-menu-button js-menu-target branch" type="button" aria-haspopup="true" aria-expanded="false">
  <i>base:</i>
  <span class="js-select-button css-truncate css-truncate-target" title="base: develop">develop</span>
</button>
`


**FROM:**

`
<div class="range-cross-repo-pair">
    <div class="select-menu js-menu-container js-select-menu fork-suggester">
  <button class="btn btn-sm select-menu-button js-menu-target" type="button" aria-label="Choose a Base Repository" aria-haspopup="true" aria-expanded="true">
    <i>base fork:</i>
    <span class="js-select-button css-truncate css-truncate-target" title="base: mewtlu/always-pr-to-fucking-develop">mewtlu/always-pr-to-fucking-develop</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
        <span class="select-menu-title">Choose a Base Repository</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="pull-repo-filter-field-base" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter repos" aria-label="Type or choose a repository">
        </div>
      </div>

      <div class="select-menu-list">
        <div data-filterable-for="pull-repo-filter-field-base" data-filterable-type="substring" role="menu">
            <a href="/mewtlu/always-pr-to-fucking-develop/compare/mewtlu:master...develop?expand=1" class="select-menu-item js-navigation-item js-navigation-open selected" role="menuitem">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text js-select-button-text">
                mewtlu/always-pr-to-fucking-develop
              </div>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


    
<div class="select-menu js-menu-container js-select-menu commitish-suggester is-dirty js-transitionable active">
  <button class="btn btn-sm select-menu-button js-menu-target branch selected" type="button" aria-haspopup="true" aria-expanded="true">
    <i>base:</i>
    <span class="js-select-button css-truncate css-truncate-target" title="base: develop">develop</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container js-active-navigation-container" data-pjax="">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
        <span class="select-menu-title">Choose a base branch</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="commitish-filter-field-c22baaf8-9fda-11e8-84c5-5d2b96d8dbb6" class="form-control js-filterable-field js-navigation-enable" placeholder="Branch, tag, commit, or history marker" aria-label="Type or choose a branch, tag, commit, or history marker">
        </div>
      </div>

      <div class="select-menu-list" data-pjax="">
        <div data-filterable-for="commitish-filter-field-c22baaf8-9fda-11e8-84c5-5d2b96d8dbb6" data-filterable-type="substring" role="menu">
            <a href="/mewtlu/always-pr-to-fucking-develop/compare/develop...develop?expand=1" class="select-menu-item js-navigation-item js-navigation-open navigation-focus" role="menuitem" rel="nofollow" aria-selected="true">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text js-select-button-text">develop</div>
            </a>
            <a href="/mewtlu/always-pr-to-fucking-develop/compare/master...develop?expand=1" class="select-menu-item js-navigation-item js-navigation-open last-visible" role="menuitem" rel="nofollow" aria-selected="false">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"></path></svg>
              <div class="select-menu-item-text js-select-button-text">master</div>
            </a>
        </div>

        <!-- '" --><!-- </textarea></xmp> --><form class="js-commitish-form" action="/mewtlu/always-pr-to-fucking-develop/compare/master...develop" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
          <input type="hidden" name="new_compare_type" value="base">
          <div class="select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form">
            <svg class="octicon octicon-history select-menu-item-icon" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 13H6V6h5v2H8v5zM7 1C4.81 1 2.87 2.02 1.59 3.59L0 2v4h4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7s7-3.14 7-7-3.14-7-7-7z"></path></svg>
            <div class="select-menu-item-text">
              <span class="js-new-item-name"></span>
            </div>
          </div>
</form>
        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  </div>
`

**TO:**

`
<button class="btn btn-sm select-menu-button js-menu-target branch" type="button" aria-haspopup="true" aria-expanded="false">
  <i>base:</i>
  <span class="js-select-button css-truncate css-truncate-target" title="base: develop">develop</span>
</button>
`