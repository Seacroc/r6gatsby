import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Test = () => (
  <Layout>
    <Seo title="Ace" />
    <h1>Ace</h1>
    <h2>Ability Overview</h2>
    <p>Ace's Unique Gadget is the SELMA Breaching Device.
        When thrown onto a breachable surface, the SELMA will
        extend a set of explosive arms, then detonate, creating
        a wide opening which can be used to establish line of sight.
        If there is room on the surface, the SELMA will lower down and
        detonate one more time, creating a larger opening through
        which Attackers can enter.</p>
    <h2>Synergies</h2>
    <p>The SELMA's extendable arms can destroy any Defender
        gadget in the vicinity as they expand, meaning Ace
        can use one to lower defences from a distance.
        Gadgets such as Thatcher's EMP Grenades, Twitch's Shock
        Drone, Kali's LV Lances, Zero's Argus Cameras, Flores'
        RCE-RATERO drone, can assist Ace by taking out Defender
        gadgets which prevent SELMAs from operating.</p>
    <h2>Counters</h2>
    <p>SELMAs can be destroyed by anyone who shoots the gadget,
        even if has already started its detonation sequence.
        SELMAs will not work on walls electrified by Bandit's
        Shock Wires or Kaid's Electroclaws.
        Thrown SELMAs can be intercepted by Jager's ADS or Wamai's Mag-Net.
        Mute's Signal Jammers can also stop SELMAs from activating.
        If the Jammer is destroyed, the SELMA will immediately activate again.
        The SELMAs explosion does little damage to Defenders, meaning
        they can risk getting close and attack while the breach is ongoing.
        The SELMAs can be destroyed by Impact Grenades and a well
        thrown Nitro Cell once one patch of a SELMA breach is open.</p>
    <h2>Loadout Overview</h2>
    <p>The S.E.L.M.A. is quite versatile in nature and with multiple units
        available to Ace, its ability to be thrown at any height makes him an
        incredibly reliable hard breacher.</p>
    <h2>AK-12</h2>
    <p>body content</p>
    <h2>M1014</h2>
    <p>body content</p>
    <h2>P9</h2>
    <p>body content</p>

    <Link to="/">Go back to the homepage</Link>

    <StaticImage
      src="../images/operator/ace/ace-full.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="Ace"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default Test
