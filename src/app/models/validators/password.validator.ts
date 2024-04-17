import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = RegExp('(?=.*[A-Z])')
    const result = passwordRegex.test(control.value)
    const errors = {
        password: {
            rules: "must contain at lesat 1 uppercase letter"
        }
    }
    return !result ? errors : null
}