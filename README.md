# ng-ui-application
Angular2 library to create applications with UI components like toolbars, resizable sections, panels... like in desktop software.

##Official site
distributed by Hive 4 apps :
[See Official site.](http://hive-4-apps.org/ng-ui-application)

##Installation
    npm install ng-ui-application --save
[And click here to see all instructions.](http://hive-4-apps.org/ng-ui-application/how-to-install-ng-ui-application)

##Usage
### Example    
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
[Demo and several examples](http://hive-4-apps.org/ng-ui-application/demo)

#Release notes

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
