import logo from './logo.svg';
import './App.css';
import "@aws-amplify/ui-react/styles.css";
import {
 withAuthenticator, 
 Button,
 Heading,
 Image,
 View,
 Card
} from "@aws-amplify/ui-react";
function App({signOut, user}) {
  return (
   <View>
      <Card>
        <Image src={logo} alt='imag'/>
        <h1>Hello {user.username}</h1>

        <Heading level={1}>We now have Auth</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
   </View>
  );
}

export default withAuthenticator(App);
