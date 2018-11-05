odoo.define('odoo_boolean_toggle.form_widgets', function (require) {
"use strict";
var core = require('web.core');
var common = require('web.form_common')
var FieldBoolean = core.form_widget_registry.get('boolean');

var ToggleSlider = FieldBoolean.extend({
    template: 'ToggleSlider',
    start: function() {
        var self = this;
        this.$checkbox = $("input", this.$el);
        this.setupFocus(this.$checkbox);
        this.$el.click(_.bind(function() {
            if(!this.get("effective_readonly")){
                this.$checkbox[0].checked = !this.$checkbox.is(':checked');
                this.internal_set_value(this.$checkbox.is(':checked'));
            }
        }, this));
        var check_readonly = function() {
            var isReadonly = self.get("effective_readonly");
            self.$checkbox.prop('disabled', isReadonly);
            if(isReadonly){
                self.click_disabled_boolean();
            }
        };
        this.on("change:effective_readonly", this, check_readonly);
        check_readonly.call(this);
        common.AbstractField.prototype.start.apply(this, arguments);
    },
    render_value: function() {
        this.$checkbox[0].checked = this.get('value');
    },
    focus: function() {
        var input = this.$checkbox && this.$checkbox[0];
        return input ? input.focus() : false;
    },
    click_disabled_boolean: function(){
        var $disabled = this.$el.find('input[type=checkbox]:disabled');
        $disabled.each(function (){
            $(this).next('span.slider').addClass('disabled');
        });
    }
});

core.form_widget_registry.add('toggle_slider', ToggleSlider);
return ToggleSlider;
});