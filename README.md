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
    <ui-application
            title="My application"
            icon="fa fa-html5">
        <ui-slice class="application-content">
            <ui-section title="section One" [footer]="true">
                <ui-panel title="Panel 1" class="section-content">//HTML Content Panel 1</ui-panel>
            </ui-section>
            <ui-section icon="fa fa-android" title="section Two" positiontabs="LEFT">
                <ui-panel icon="http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/128/shop-icon.png" class="section-content">//HTML Content Panel 2</ui-panel>
                <ui-panel icon="http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/96/global-icon.png" class="section-content">//HTML Content Panel 3</ui-panel>
            </ui-section>
        </ui-slice>
        <ui-slice class="application-content">
            <ui-section icon="icon-files" title="section Three" positiontabs="RIGHT">
                <ui-panel title="Panel 4" icon="http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/128/compose-icon.png" class="section-content">//HTML Content Panel 4</ui-panel>
                <ui-panel title="Panel 5" icon="http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/128/circlecompass-icon.png" class="section-content">//HTML Content Panel 5</ui-panel>
                <ui-panel title="Panel 6" icon="http://icons.iconarchive.com/icons/elegantthemes/beautiful-flat-one-color/128/paint-brush-2-icon.png" class="section-content">//HTML Content Panel 6</ui-panel>
            </ui-section>
            <ui-section title="section Four" [header]="false" positiontabs="BOTTOM">
                <ui-panel title="Panel 7" icon="fa fa-cubes" class="section-content">//HTML Content Panel 7</ui-panel>
                <ui-panel title="Panel 8" icon="fa fa-cubes" class="section-content">//HTML Content Panel 8</ui-panel>
            </ui-section>
            <ui-section icon="http://image.flaticon.com/icons/png/512/296/296530.png"  title="section Five">
                <ui-panel title="Panel 9" icon="icon-desktop" class="section-content">//HTML Content Panel 9</ui-panel>
                <ui-panel title="Panel 10" icon="icon-tablet" class="section-content">//HTML Content Panel 10</ui-panel>
                <ui-panel title="Panel 11" icon="icon-mobile" class="section-content">//HTML Content Panel 11</ui-panel>
            </ui-section>
        </ui-slice>
        <ui-slice class="application-content">
            <ui-section title="section Six" positiontabs="BOTTOM">
                <ui-panel title="Panel 12" class="section-content">//HTML Content Panel 12</ui-panel>
            </ui-section>
        </ui-slice>
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
                    <ui-panel title="Unique Panel" class="section-content">
                         //HTML Content   
                    </ui-panel>
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

##0.6.4
  * uninstall system cleaner
  * CSS stylesheets location improvement
  * CSS optimization
  * few design changes (ui-section content & tabs)

##0.6.3
* README.md
   * Corrected spelling error
   
##0.6.2
* README.md
  * Example 1 modified with new features included

##0.6.1
* Bugs fixs
  * Patches for the Panel component

##0.6.0
* New features
    * "positiontabs" attribute created => to choose the tabs location in ui-section
    * "icon" attribute updated => can support an image or an icon from fonts - useful for ui-application, ui-section and ui-panel
    * [Themify icons](https://themify.me/themify-icons) and [Font awesome](http://fontawesome.io/icons/) are supported 

##0.5.0
* UI Components
    * ui-panel

##0.4.0
* UI improved
    * New design to prepare UX for futures components

##0.3.2
* Bugs fixs
  * html items inside header and footer slots (of ui-application component) stay to be inline after a window resize

##0.3.1
* Bugs fixs
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
  * CSS was dispatched by component - hack-4-apps.css was removed
  * ui-section and ui-application inherits from a common component called ui-frame
* Bugs fixs
  * For chrome - resizing for two ways is completely available but after to collapse the component

##0.2.4
* README.md
  * Corrected spelling error
  * Release Notes added

##0.2.3
* Bugs fixs
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
