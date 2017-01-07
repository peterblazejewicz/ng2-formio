// THIS IS A GENERATED FILE. DO NOT MODIFY!!!
/* eslint-disable */
/* tslint-disable */
import { FormioTemplate } from '../formio.template';
import { DatepickerModule, TimepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SelectModule } from 'ng2-select/ng2-select';
import { TextMaskModule } from 'angular2-text-mask';
import { AlignDirective } from '../components/signature/signature';
import { SignaturePadModule } from 'angular2-signaturepad';

let requiredCSS: string = '.required .control-label::after { content:" *"; color:red; }';
let getTemplate = (template: string ) => {
    return {
        component: {
            template: template, 
            styles: [requiredCSS]
        }
    };
};
export const FORMIO_BOOTSTRAP: FormioTemplate = {
    formio: {
        component: {
            template: require('html!./bootstrap/formio.html'),
            styles: [
                '.glyphicon-spin { -webkit-animation: spin-anim 1s infinite; animation: spin-anim 1s infinite; }',
                '@-webkit-keyframes spin-anim {0% { -webkit-transform: rotate(0deg);transform: rotate(0deg);}100% { -webkit-transform: rotate(359deg);transform: rotate(359deg);}}',
                '@keyframes spin-anim {0% { -webkit-transform: rotate(0deg);transform: rotate(0deg);}100% { -webkit-transform: rotate(359deg);transform: rotate(359deg);}}'
            ]
        }
    },
    formio_wizard: {
        component: {
            template: require('html!./bootstrap/formio-wizard.html'),
            styles: [
                '.bs-wizard {border-bottom: solid 1px #e0e0e0; padding: 0 0 10px 0;line-height: 1em;}',
                '.bs-wizard > .bs-wizard-step {padding: 0; position: relative;}',
                '.bs-wizard > .bs-wizard-step + .bs-wizard-step {}',
                '.bs-wizard > .bs-wizard-step .bs-wizard-stepnum-wrapper {position:absolute;width:100%}',
                '.bs-wizard > .bs-wizard-step .bs-wizard-stepnum {color: #595959; font-size: 12px; line-height:15px;}',
                '.bs-wizard > .bs-wizard-step .bs-wizard-info {color: #999; font-size: 14px;}',
                '.bs-wizard > .bs-wizard-step > .bs-wizard-dot {position: absolute; width: 30px; height: 30px; display: block; top: 25px; left: 50%; margin-top: -15px; margin-left: -15px; border-radius: 50%; cursor:pointer;z-index:10;}',
                '.bs-wizard.hasTitles > .bs-wizard-step > .bs-wizard-dot {top: 45px;}',
                '.bs-wizard > .bs-wizard-step > .bs-wizard-dot > .bs-wizard-dot-inner {width: 14px; height: 14px; border-radius: 50px; position: absolute; top: 8px; left: 8px; }',
                '.bs-wizard > .bs-wizard-step > .progress {position: relative; border-radius: 0px; height: 10px; box-shadow: none; margin: 20px 0;border: none;padding: 0;}',
                '.bs-wizard.hasTitles > .bs-wizard-step > .progress {margin-top: 40px;}',
                '.bs-wizard > .bs-wizard-step > .progress > .progress-bar {width:0px; box-shadow: none;}',
                '.bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {width:100%;border-radius:0;}',
                '.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {width:50%;}',
                '.bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {width:0%;}',
                '.bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {width: 100%;}',
                '.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {background-color: #f5f5f5;}',
                '.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot > .bs-wizard-dot-inner {opacity: 0;}',
                '.bs-wizard > .bs-wizard-step:first-child  > .progress {left: 50%; width: 50%;}',
                '.bs-wizard > .bs-wizard-step:last-child  > .progress {width: 50%;}',
                '.bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot{ pointer-events: none; }'
            ]
        }
    },
    formio_component: getTemplate(require('html!./bootstrap/formio-component.html')),
    formio_components: getTemplate(require('html!./bootstrap/formio-components.html')),
    errors: getTemplate(require('html!./bootstrap/errors.html')),
    components: {
        button: getTemplate(require('html!./bootstrap/components/button.html')),
        columns: getTemplate(require('html!./bootstrap/components/columns.html')),
        container: getTemplate(require('html!./bootstrap/components/container.html')),
        datagrid: getTemplate(require('html!./bootstrap/components/datagrid.html')),
        input: getTemplate(require('html!./bootstrap/components/input.html')),
        number: getTemplate(require('html!./bootstrap/components/number.html')),
        textarea: getTemplate(require('html!./bootstrap/components/textarea.html')),
        hidden: getTemplate(require('html!./bootstrap/components/hidden.html')),
        radio: getTemplate(require('html!./bootstrap/components/radio.html')),
        checkbox: getTemplate(require('html!./bootstrap/components/checkbox.html')),
        custom: getTemplate(require('html!./bootstrap/components/custom.html')),
        table: getTemplate(require('html!./bootstrap/components/table.html')),
        panel: getTemplate(require('html!./bootstrap/components/panel.html')),
        fieldset: getTemplate(require('html!./bootstrap/components/fieldset.html')),
        well: getTemplate(require('html!./bootstrap/components/well.html')),
        day: getTemplate(require('html!./bootstrap/components/day.html')),
        datetime: {
            component: {
                template: require('html!./bootstrap/components/datetime.html'),
                styles: [requiredCSS, ".showDate {width:48vmin;border:1px solid #ccc;}", ".showTime {width:53vmin;height:22vmin;border:1px solid #ccc;}", ".buttonsSpace {padding:5px;}"]
            },
            module: {
                imports: [DatepickerModule, TimepickerModule]
            }
        },
        selectboxes: getTemplate(require('html!./bootstrap/components/selectboxes.html')),
        content: getTemplate(require('html!./bootstrap/components/content.html')),
        html: getTemplate(require('html!./bootstrap/components/html.html')),
        currency: getTemplate(require('html!./bootstrap/components/currency.html')),
        select: {
            component: {
                template: require('html!./bootstrap/components/select.html'),
                styles: [requiredCSS]
            },
            module: {
                imports: [SelectModule]
            }
        },
        survey: getTemplate(require('html!./bootstrap/components/survey.html')),
        resource: {
            component: {
                template: require('html!./bootstrap/components/resource.html'),
                styles: [requiredCSS]
            },
            module: {
                imports: [SelectModule]
            }
        },
        address: {
            component: {
                template: require('html!./bootstrap/components/address.html'),
                styles: [requiredCSS]
            },
            module: {
                imports: [SelectModule]
            }
        },
        phoneNumber: {
            component: {
                template: require('html!./bootstrap/components/phonenumber.html'),
                styles: [requiredCSS]
            },
            module: {
                imports: [TextMaskModule]
            }
        },
        signature: {
            component: {
                template: require('html!./bootstrap/components/signature.html'),
                styles: ['.required .footer::after { content:" *"; color:red; }', ".clearButton {position:absolute; left: 0; top: 0; z-index: 1000}", ".footer {text-align: center; color:#C3C3C3;}"]
            },
            module: {
                imports: [SignaturePadModule],
                declarations: [AlignDirective]
            }
        }
    }
};
