import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = RegExp('wilder\.school$')
    const result = emailRegex.test(control.value)

    const errors= {
        email: {
            rules: "l'email doit se terminer par 'wilder.school'"
        }
    }
    return !result ? errors : null;
}