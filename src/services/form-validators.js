export class ValidatorService{

    static min(value, min) {
        if(value.length < min) {
            return `Veuillez saisir au moins ${min} caractères`;
        }
    };

    static max(value,max) {
        if(value.length > max) {
            return `Veuillez saisir au maximum ${max} caractères`;
        }
    };
}