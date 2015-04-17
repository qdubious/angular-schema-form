'use strict';
var base = 'directives/decorators/mui/';

angular.module('schemaForm').config(['schemaFormDecoratorsProvider', function (decoratorsProvider) {
    decoratorsProvider.createDecorator('muidecorator', {
        textarea: base + 'textarea.html',
        fieldset: base + 'fieldset.html',
        array: base + 'array.html',
        tabarray: base + 'tabarray.html',
        tabs: base + 'tabs.html',
        section: base + 'section.html',
        conditional: base + 'section.html',
        actions: base + 'actions.html',
        select: base + 'select.html',
        checkbox: base + 'checkbox.html',
        checkboxes: base + 'checkboxes.html',
        number: base + 'default.html',
        password: base + 'default.html',
        submit: base + 'submit.html',
        button: base + 'submit.html',
        radios: base + 'radios.html',
        'radios-inline': base + 'radios-inline.html',
        radiobuttons: base + 'radio-buttons.html',
        help: base + 'help.html',
        label: base + 'label.html',
        'default': base + 'default.html'
    }, []);

    //manual use directives
    decoratorsProvider.createDirectives({
        textarea: base + 'textarea.html',
        label: base + 'label.html',
        select: base + 'select.html',
        checkbox: base + 'checkbox.html',
        checkboxes: base + 'checkboxes.html',
        number: base + 'default.html',
        submit: base + 'submit.html',
        button: base + 'submit.html',
        text: base + 'default.html',
        date: base + 'default.html',
        password: base + 'default.html',
        datepicker: base + 'datepicker.html',
        input: base + 'default.html',
        radios: base + 'radios.html',
        'radios-inline': base + 'radios-inline.html',
        radiobuttons: base + 'radio-buttons.html'
    });

}]).directive('sfFieldset', function () {
    return {
        transclude: true,
        scope: true,
        templateUrl: base + 'fieldset-trcl.html',
        link: function (scope, element, attrs) {
            scope.title = scope.$eval(attrs.title);
        }
    };
}).directive('sfWriteout', function () {
    return {
        scope: true,
        template: '{{value}}',
        link: function (scope, element, attrs) {
            var value = scope.$eval(attrs.ngModel);
            scope.$watch(scope.form.key.join('.'), function(value){
                scope.value = value;
            });
        }
    };
});
