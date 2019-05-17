// 'use strict';

$.fn._schedulerDatepicker = $.fn.datepicker; //hijack this package datepicker
$.fn._schedulerDatetimepicker = $.fn.datetimepicker; //hijack this package datepicker

$.fn.datepicker.dates['pt-BR'] = {
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    daysMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: "Hoje",
    clear: "Apagar"
};

$.fn.datepicker.dates['es'] = {
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"],
    daysShort: ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    today: "Hoy",
    clear: "Borrar"
};

// Init the current locale on the MomentJS library
moment.locale(TAPi18n.getLanguage());

Template.afSchedulerBootstrapDatepicker.helpers({
    atts: function () {
        var atts = _.clone(this.atts);
        // Add bootstrap class
        atts = AutoForm.Utility.addClass(atts, 'form-control');
        delete atts.datePickerOptions;
        delete atts.datetimePickerOptions;

        return atts;
    }
});

Template.afSchedulerBootstrapDatepicker.onRendered(function () {
    var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');
    var data = this.data;
    // instanciate datepicker
    var datepicker;
    if (data.id === 'js-until') {
        $input._schedulerDatepicker(data.atts);
        datepicker = $input.data('datepicker');
    } else {
        $input._schedulerDatetimepicker(data.atts);
        datepicker = $input.data('DateTimePicker');
    }

    // set and reactively update values
    this.autorun(function () {
        var data = Template.currentData();
        // set field value
        if (data.value instanceof Date) {
            // $input._schedulerDatepicker('setUTCDate', data.value);
            datepicker.setDate(data.value);
        } else if (typeof data.value === 'string') {
            // $input._schedulerDatepicker('update', data.value);
            datepicker.setDate(data.value);
        }
        // set start date if there's a min in the schema
        if (data.min instanceof Date) {
            // datepicker plugin expects local Date object,
            // so convert UTC Date object to local
            var startDate = utcToLocal(data.min);
            // $input._schedulerDatepicker('setStartDate', startDate);
            datepicker.setMinDate(startDate);
        }
        // set end date if there's a max in the schema
        if (data.max instanceof Date) {
            // datepicker plugin expects local Date object,
            // so convert UTC Date object to local
            var endDate = utcToLocal(data.max);
            // $input._schedulerDatepicker('setEndDate', endDate);
            datepicker.setMaxDate(endDate);
        }
    });
});

Template.afSchedulerBootstrapDatepicker.onDestroyed(function () {
    var $input = this.data.atts.buttonClasses ? this.$('.input-group.date') : this.$('input');

    var picker = $input.data('DateTimePicker');

    if (picker) {
        picker.destroy();
    }
});

var utcToLocal = function (utcDate) {
    var localDateObj = new Date();

    localDateObj.setDate(utcDate.getUTCDate());
    localDateObj.setMonth(utcDate.getUTCMonth());
    localDateObj.setFullYear(utcDate.getUTCFullYear());
    localDateObj.setHours(0);
    localDateObj.setMinutes(0);
    localDateObj.setSeconds(0);
    localDateObj.setMilliseconds(0);

    return localDateObj;
};
