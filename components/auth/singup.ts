import {Auth} from 'aws-amplify';



export type SignUpProps = { 
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    confirmPassword: string;
}


export async function signUp(userDetails: SignUpProps) {

    const { lastName, password, email, firstName } = userDetails;
    try {
        const { user } = await Auth.signUp({
            username:email,
            password,
            attributes: {
                name : firstName,          // optional
                family_name : lastName,// other custom attributes 
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}