import Card from "./Card";

// We can use props to pass custom data to react components, just like what happens in HTML when
// we want to give attributes to elements. Differently from plain HTML, we can create attributes in React.

// NOTICE that when inserting a component, is almost as if we were calling a function, therefore
// the attributes that we create in the component can be accessed by the parameter in the function.
function App()
{
    return (
        <div>
            <h1>My Contacts</h1>

            <Card name="Beyonce"
                  img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                  phoneNumber="+123 456 789"
                  email="b@beyonce.com"
            />
            <Card name="Jack Bauer"
                  img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                  phoneNumber="+987 654 321"
                  email="jack@nowhere.com"
            />
            <Card name="Chuck Norris"
                  img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                  phoneNumber="+918 372 574"
                  email="gmail@chucknorris.com"
            />
        </div>
    );
}

export default App;