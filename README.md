# ng-ui-application
Angular2 library to create applications with UI components like toolbars, resizable sections, panels... like in desktop software.

##Official site
distributed by Hive 4 apps :
[See Official site.](http://hive-4-apps.org/ng-ui-application)

##Installation
    npm install ng-ui-application --save
[And click here to see all instructions.](http://hive-4-apps.org/ng-ui-application/how-to-install-ng-ui-application)

##Usage
### Example 1  
    <ui-application title="My application" icon="path/to/icon">
        <ui-slice>
            <ui-section title="section One">//HTML Content</ui-section>
            <ui-section title="section Two">//HTML Content</ui-section>
        <ui-slice>
        <ui-slice>
            <ui-section title="section Three">//HTML Content</ui-section>
            <ui-section title="section Four">//HTML Content</ui-section>
            <ui-section title="section Five">//HTML Content</ui-section>
        <ui-slice>
        <ui-slice>
            <ui-section title="section Six">//HTML Content</ui-section>
        <ui-slice>
    </ui-application>
### Example 2
    <ui-application 
            icon="https://secure.gravatar.com/avatar/46d07086561c66caae16ce4d96bfd345?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-org-420.png"
            title="My application"
            [footer]="true">
            <ui-section title="section 1" class="application-content" [footer]="true">
                    <nav class="section-header-slot-left">
                            <a href="#">HTML</a> |
                            <a href="#">CSS</a> |
                            <a href="#">JavaScript</a> |
                            <a href="#">jQuery</a>
                    </nav>
                    <nav class="section-header-slot-center">
                            <a href="#">PHP</a> |
                            <a href="#">MySQL</a>
                    </nav>
                    <nav class="section-header-slot-right">
                            <a href="#">Laravel</a> |
                            <a href="#">Symphony</a> |
                            <a href="#">Zend</a>
                    </nav>
                    <button class="section-footer-slot-left">Firefox</button>
                    <button class="section-footer-slot-left">Chrome</button>
                    <button class="section-footer-slot-left">Edge</button>
                    <button class="section-footer-slot-left">Opera</button>
                    <button class="section-footer-slot-left">Safari</button>
                    <span class="section-footer-slot-center">Copyrigth © 2017 My application</span>
                    <span class="section-footer-slot-right" class="icon-pie-chart icon-spin"></span>    
            </ui-section>
    </ui-application>

[Demo and several examples](http://hive-4-apps.org/ng-ui-application/demo)

#Release notes

##0.3.2
* Bugs fixed
  * html items inside header and footer slots (of ui-application component) stay to be inline after a window resize



##0.3.1
* Bugs fixed
  * html items inside header and footer slots stay to be inline after a window resize

##0.3.0
* New features
  * Insert HTML code in the header and footer application component
  * Insert HTML code in each header and footer section component

##0.2.5
* UI Improved
  * unuseful scrollbar were removed
  * Dynamically resize of components after a window resizing
* Code optimization
  * CSS was dispaced by component - hack-4-apss.css was removed
  * ui-section and ui-aplication inherits from a common component called ui-frame
* Bugs fixed
  * For chrome - resizing for two ways is completely available but after to collapse the component

##0.2.4
* README.md
  * Corrected spelling error
  * Release Notes added

##0.2.3
* Bugs fixed
  * ui-sections wrapped directly by ui-application
  * direction attribute setting up by default for ui-application

##0.2.2
* First published
* UI Components
  * ui-application
  * ui-slice
  * ui-section

#Contributors

* Johan Maïa
* [Nicolas Poiteau](http://www.nico-webmaster.fr/)
