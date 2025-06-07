
import HeroLink from "./HeroLink"


const Hero = () => {
  return (
    <div className="hero-content">
        <h4>Harness your <span>energy</span></h4>
        <p className="larger-text">shine with uniqueness</p>
        <p className="smaller-text">connect with the gemstones of wisdom,intuition,empathy,passion,loyalty,courage and many more...</p>
        <HeroLink link='explore'/>
    </div>
  )
}

export default Hero