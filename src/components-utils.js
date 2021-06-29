//Regex validation:
export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

export const validPhone = new RegExp(
    /^[0-9\b]+$/
);