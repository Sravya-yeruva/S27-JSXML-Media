import logo from "./logo.svg";
import "./App.css";
import image from "./image/GF.jpg";
import video from "./video/God Father.mp4";

function App() {
  return (
    <div className="App">
      <h1 class="headingH">Movies</h1>
      <hr></hr>
      <div class="mainD1">
        <h1>Pushpa2</h1>
        <img src="https://i.ytimg.com/vi/7cFb8POwt-8/maxresdefault.jpg"></img>
        <p class="para">
          The Rise is a 2021 Indian Telugu-language action drama film written
          and directed by Sukumar, and produced by Mythri Movie Makers and
          Muttamsetty Media. The film stars Allu Arjun as Pushpa Raj, a coolie
          who rises in a syndicate that smuggles red sandalwood, a rare wood
          that grows only in the Seshachalam Hills of Andhra Pradesh. It also
          stars Fahadh Faasil (in his Telugu debut) and Rashmika Mandanna while
          Dhananjaya, Jagadeesh Prathap Bandari, Sunil, and Ajay Ghosh. The film
          began production in December 2019 but was halted in March 2020 by the
          COVID-19 pandemic
        </p>
        <audio src="./audio/pmp3.mpeg" controls></audio>
      </div>
      <hr></hr>
      <div class="mainD3">
        <h1>God Father</h1>
        <img src={image}></img>
        <p class="para">
          Godfather (stylised as GodFather) is a 2022 Indian Telugu-language
          political action thriller film directed by Mohan Raja. It is a remake
          of the 2019 Malayalam film Lucifer.[3] The film stars Chiranjeevi in
          the title role, alongside an ensemble cast including Salman Khan,
          Nayanthara, Satya Dev, Murali Mohan, Puri Jagannadh, Murali Sharma,
          Tanya Ravichandran, Sarvadaman D. Banerjee, Samuthirakani, Nawab Shah
          and Sunil. It is produced by R. B. Choudary and N. V. Prasad under the
          Konidela Production Company and the Super Good Films' banners. In the
          film, the supreme leader of the ruling party dies, leaving a huge
          vacuum, not only in the electoral and leadership spheres of the party
          but also that of the state. In the inevitable succession squabble the
          thin line that separates good and bad becomes irrecoverably blurred.
          Whoever will succeed him forms the plot.
        </p>
        <video src={video} controls></video>
      </div>
    </div>
  );
}

export default App;
