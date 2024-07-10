---
title: "How Computers Work #1: Transistors"
description: A series on uncovering the inner workings on how computers work, bit by bit.
pubDate: 2021-07-31
heroImage: /blog-placeholder-3.jpg
category: how things work
subCategory: computers
tags:
  - tech
  - blog
---
This is part 1 of my How Computers Work series, a series to uncover how this magic box works:

1. Transistors
2. Boolean Arithmetic and Logic Gates

Transistors make up most of the brains of a computer so much so your computer has billions of them.  Modern transistors can also be called Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs), that rely purely on silicone and other elements. Present days transistors are getting smaller and smaller, so small in fact we're nearly getting into quantum physics. It's mentioned that 3nm is most likely the limit and beyond that it's more theoretically than anything else. Much lower than that and we're getting into into atomic and Bekenstein bound limits; keep in mind a silicon atom's diameter is 0.2nm.

Actual Transistor size inside of CPUs

History and Preceding Inventions

We can first thank AT&T's Bell Lab's for creating so many of todays modern computing inventions from their research and inventions. From Unix operating system, C, C++ and arguable the most important, the transistor, which adequately named after transfer resistance "trans-sis-tors".

To start off with a little history, Alexander Graham Bell whom controversy patented the electric telephone in 1876, under with Bell Patent Association, however, this was formalized into a company, named Bell Telephone Company, a year later with his father-in-law, Gardiner Green Hubbard. Bell Telephone Company eventually became American Telephone & Telegraph (AT&T) after a few mergers and company politics.

Bell's First Electric Telephone (source: http://privateline.com/?page_id=193)

Eventually, AT&T could make phone calls from the New York on the US East code to Denver, just past the middle of the US. But with Bell's patient expiry in the late 1900s, other telephone companies were starting up taking more customers. AT&T wanted to become the first company to be making calls from the East coast to the West coast (the typical telecommunication battle of having the larger coverage) but electromagnetic waves could not travel that far yet.

AT&T 1912 Maximum Distance Phone Call

Fear not! Because another amazing invention took place that AT&T would later by the patient for in 1912 that would achieve their goal; a recommendation by Harold Arnold who was part of AT&T's engineering department. The Vacuum Tube diode was invented in 1904 and was able to take electrical signals and without distorting the signal too much, it was able to amplify the signal, achieving AT&T's required signal boost and was put into place by 1915 to reach telephone calls from East to West coast of the US.

Original vacuum tube 

During the 1900s the vacuum tube was used a lot to amplify signal but was prone to burning out, it was also large and used a lot of electricity, which wouldn't be able to handle the scale of large frequent usage. Additionally, with large usage, there manual switch board operators could also not scale with usage, there needed to be an automated way of electrically routing.

Bells Lab theorised an initial semiconductor amplifier (a bipolar transistor) using Siloxane and Polymer, together named Silicone as the semiconductor. This worked by applying electricity to a base plate, creating an electromagnetic field which pulled electrons from atoms to it and created a pathway for another circuit to allow the other electrons in the circuit to flow.

In practicality the modern transistor took advantage of doping to really allow electricity to flow through the silicone crystal more easily and quickly. Doping in a silicone is when we injecting impurities into the semiconductor add atoms with more or less electrons than silicone to promote the flow of electrons and therefore electricity. Note that pure silicone has 4 electrons!

There are 2 forms of doping:
N-type (Negative electrons move) - Where we take elements like phosphorus which have 3 electrons (1 less than silicone) and inject it into silicone, therefore wanting creating a gap that another electron can move into. 
P-type (Positively electrons move) - Where we take elements like boron which have 5 electrons (1 more than silicone) and inject it into silicone, therefore forcing new electrons to be more attracted to the silicone and N-Type doped silicone.

We can combine these doping types to one piece of silicone to achieve not only an increase of electricity speed but also a way of controlling the flow of electricity. The most common configuration is NPN on most transistors:

(source: https://en.wikipedia.org/wiki/Bipolar_junction_transistor)

Get a better understanding with this video, next article in this series we'll go into why transistors are critical decision  makers!

<iframe
  loading="lazy"
  style="inline-style: 100%; block-size: auto; aspect-ratio: 16/9;"
  src="https://www.youtube-nocookie.com/embed/7ukDKVHnac4?si=m0hM3B_De8uUUCs8"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen>
</iframe>


#### Sources

- Transistor Full Documentary - https://www.youtube.com/watch?v=U4XknGqr3Bo
- History of the telephone - https://en.wikipedia.org/wiki/History_of_the_telephone
- Elisha Gray and Alexander Bell telephone controversy - [https://en.wikipedia.org/wiki/Elisha-Gray-and-Alexander-Bell-telephone-controversy](https://en.wikipedia.org/wiki/Elisha_Gray_and_Alexander_Bell_telephone_controversy)
- How the Bell's first electric telephone worked - https://www.howitworksdaily.com/how-bells-telephone-worked
- Vacuum Tube - https://en.wikipedia.org/wiki/Vacuum_tube
- AT&T Archives: A Modern Aladdin's Lamp, about vacuum tubes,1940 - https://www.youtube.com/watch?v=_-JzxX75oYc
- How a semiconductor works - https://electronics.howstuffworks.com/diode.htm
- NPN vs PNP transistor - https://www.arrow.com/en/research-and-events/articles/npn-vs-pnp-in-circuit-design-and-industrial-controls
- Bipolar junction transistor - https://en.wikipedia.org/wiki/Bipolar_junction_transistor
- How small can we make a transistor - https://qz.com/852770/theres-a-limit-to-how-small-we-can-make-transistors-but-the-solution-is-photonic-chips
