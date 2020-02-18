import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { containerStyles } from './commonStyle'
import Image from './Image'
function CountryDetails() {
    const containerStyle = containerStyles()

    return (
        <Container maxWidth="md" style={{ backgroundColor: '#cfe8fc' }} classes={containerStyle}>
            <Typography align="center" component="div">
                <div className="container">
                    <h1>India</h1>
                    <div className="about-india" style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
                        <p >
                            India is a vast South Asian country with diverse terrain –
                             from Himalayan peaks to Indian Ocean coastline – and history
                             reaching back 5 millennia. In the north, Mughal Empire landmarks
                              include Delhi’s Red Fort complex and massive Jama Masjid mosque,
                               plus Agra’s iconic Taj Mahal mausoleum. Pilgrims bathe in the
                               Ganges in Varanasi, and Rishikesh is a yoga centre and base for
                                Himalayan trekking.
                     </p>
                        <p>India is a famous country all over the world. Geographically, our country is
                             located to the south of Asia continent. India is a high population country and
                              well protected from all directions naturally. It is a famous country for its
                               great cultural and traditional values all across the world. It contains a
                               mountain called Himalaya which is biggest in the world. It is surrounded by
                               the three big oceans from three directions such as in south with Indian Ocean, in
                               east with Bay of Bengal and in west with Arabic sea. India is a democratic country ranks
                               second for its population. The national language of India is Hindi however
                     almost fourteen nationally recognized languages are spoken here.</p>
                        <h3>The 7 Wonders Of India</h3>
                        <h4> Taj Mahal In Uttar Pradesh</h4>

                        <Image src="https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-st7ic3nd5mj11eqa6muum6lv91-20171022001813.Medi.jpeg" alt="taj-mahal" />
                        <h4>The Golden Temple In Punjab</h4>
                        <Image src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/13/b2/c7/shutterstock-252865861.jpg" alt="golden-temple" />
                        <h4>The Monolithic Gomateshwara Statue In Karnataka</h4>
                        <Image src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/1c/c0/02/shutterstock-776917522.jpg" alt="Gomateshwara-Image" />
                        <h4>The Nalanda University In Bihar</h4>
                        <Image src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/42/44/2f/shutterstock-481643158.jpg" alt="nalanda-university" />
                        <h4>The Konark Sun Temple In Orissa</h4>
                        <Image src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/ca/69/ed/shutterstock-124418254.jpg" alt="Konark-temple" />
                        <h4> Khajuraho Group Of Monuments In Madhya Pradesh</h4>
                        <Image src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/be/2a/6a/shutterstock-110301533.jpg" alt="Khajuraho" />
                        <h4>The Hampi Temple Complex In Karnataka</h4>
                        <Image src="https://www.worldatlas.com/r/w728-h425-c728x425/upload/5c/5f/51/shutterstock-557008465.jpg" alt="Hampi " />

                    </div>
                </div>
            </Typography>
        </Container>
    )
}

export default CountryDetails