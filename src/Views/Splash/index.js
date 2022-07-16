import Page from '../../Components/Page';
const h1SplashStyle = {
  width: "100%",
  backgroundColor: "#fff",
  textAlign: "center",
  padding: "1rem",
  boxShadow: "0px 3px 5px #bbb"
}

const Splash = () => {
  return (
    <Page
      useAbsoluteCenter={true}
      showNavBar={false}
    >
      <h1 style={h1SplashStyle} className="text-black">Ochenta App <br /> v1.0.0 <br />  <progress class="progress w-56"></progress> </h1>
     
    </Page>
  )
}

export default Splash;
