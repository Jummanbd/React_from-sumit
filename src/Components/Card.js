import nerdImage from '../assets/images/illustration.png';
import Button from "./Button";
import { ButtonContainer, CardContainer, ContentContainer } from './styles/Container.style';
import { H1, Image, P, Tag } from './styles/Elements';
 import { StyledTitle } from './styles/Custom.styles';

export default function Card () {
    return(
        <CardContainer>
          <ContentContainer>
          <Tag color = '#4361ee'>EXCLUSIVE</Tag>

                <H1>
                    <StyledTitle text= "React Styled Componets" color = '#ffff'/>
                </H1>
                <P>
                    Exclusive React JS Tutorial On Styled Components where you will need this how to use it.
                </P>
                <ButtonContainer>
                  <Button link="https://lwsbd.link/rsc" text="Watch now"/>
                  <Button link="https://lwsbd.link/react" text="Github repo"/>
                </ButtonContainer>
          </ContentContainer>
            <Image src={nerdImage}  alt="Nerd" width="300px" />
        </CardContainer>
    )
}