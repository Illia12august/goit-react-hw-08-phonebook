import { PhoneboofStyle, TitleStyle } from "./NavigationPage.styled";
const NavigationPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '44px' }}> 
        <PhoneboofStyle>Phonebook</PhoneboofStyle>
         <TitleStyle>Your personal SPACE</TitleStyle>
        </div>
       
    )
}

export default NavigationPage;