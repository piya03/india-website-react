import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {containerStyles} from './commonStyle'
 function Languages() {
     const containerStyle = containerStyles()
    return (
        <Container maxWidth="md"  style={{ backgroundColor: '#cfe8fc'}} classes={containerStyle}>       
            <Typography align="center"  component="div">

        <div className="container">
            <div className="about-language">
                <h3>Languages in India  An introduction</h3>
                <p>
                    There are 22 major languages in India, written in 13 different scripts, with over 720 dialects. The official Indian languages are Hindi (with approximately 420 million speakers) and English, which is also widely spoken.</p>
                <p>
                    In addition, several states in India have their own official languages, which are usually only spoken particular areas. Among them are Bengali (83 million speakers), Telugu (spoken by 74 million people) and Marathi (72 million speakers). However, standard Hindi, which is based on a colloquial dialect around Delhi, is taught at all schools in India.</p>
                <h4>Languages in North India</h4>
                <p>Hindi is spoken in north and central India. However, there are many dialects in India and Hindi is more like a rubric for different dialects. Whether a regional variation is considered Hindi or a dialect depends solely on social perceptions and not on mutual intelligibility.
               As a rule, the further the distance between regions in India using Hindi, the harder it will be for speakers to understand each other. The relationships between dialects far away from each other are probably roughly proportional to the relationships of Latin-derived languages, such as French, Spanish and Portuguese.</p>
                <h4>Languages in South India</h4>
                <p>In the south of India there is a greater diversity of languages and you will have difficulties getting along with Hindi. Languages differ even between the important industrial centers Bangalore, Madras and Hyderabad.
             English proves to be helpful here. However, you may have problems understanding Indian English (Hinglish) as there are peculiarities in grammar and vocabulary. So if someone in India says he passed out of school it doesn't mean that it knocked him unconscious, just that he finished successfully.
              The main languages in South India are Malayalam, Tamil, Telugu and Kannada. They are all Dravidian languages and, therefore, share structural aspects. Much of the vocabulary was borrowed from languages such as Hindi, so there are often only different pronunciations and slight shifts in meaning.</p>
                <h4>Indian alphabet</h4>
                <p>Hindi and many Indian languages use the Devanagari alphabet, which was originally used to write Sanskrit. It is written from left to right and can be easily identified by a horizontal bar at the top of each letter. Each letter resembles a single consonant or vowel.
      To being able to read languages using Devanagari without having to know their letters, there is the International Alphabet of Sanskrit Transliteration (IAST). Each Devanagari letter is resembled by a Roman character which sounds, more or less, equal to its Devanagari equivalent.</p>

                <h4>Urdu vs. Hindi</h4>
                <p>You will also meet people in the north of India saying they speak Urdu. However, Hindi and Urdu are basically the same language. The only main difference is that Hindi uses the Sanskrit-based Devanagari script in contrast to the Perso-Arabic script of Urdu. The vocabulary of both languages is essentially the same. If there is no word for a concept, both will borrow words from either Sanskrit or Persian, respectively. However, speakers of Urdu and Hindi will not encounter communication difficulties in everyday conversations.</p>
            </div>
        </div>
       </Typography>
        </Container>       

    )
}

export default Languages