/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    url:"https://arxiv.org/abs/1703.10593v7",
    title: "Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks",
    authors:
      "Jun-Yan Zhu, Taesung Park, Phillip Isola, Alexei A. Efros",
    conferences:
      "arXiv.org 2017",
    researchYr: 2017,
    citebox: "popup1",
    image: "assets/images/research-page/cyclegan.jpg",
    citation: {
      vancouver:
        "1.Zhu JY, Park T, Isola P, Efros AA. Unpaired Image-to-Image Translation using Cycle-Consistent Adversarial Networks [Internet]. arXiv.org. 2017. Available from: https://arxiv.org/abs/1703.10593",
    },
    abstract:
      "Image-to-image translation is a class of vision and graphics problems where the goal is to learn the mapping between an input image and an output image using a training set of aligned image pairs. However, for many tasks, paired training data will not be available. We present an approach for learning to translate an image from a source domain X to a target domain Y in the absence of paired examples. Our goal is to learn a mapping G:X→Y such that the distribution of images from G(X) is indistinguishable from the distribution Y using an adversarial loss. Because this mapping is highly under-constrained, we couple it with an inverse mapping F:Y→X and introduce a cycle consistency loss to push F(G(X))≈X (and vice versa). Qualitative results are presented on several tasks where paired training data does not exist, including collection style transfer, object transfiguration, season transfer, photo enhancement, etc. Quantitative comparisons against several prior methods demonstrate the superiority of our approach.",
    absbox: "absPopup1",
  },

  {
    url:"https://www.sciencedirect.com/science/article/pii/S1566253523001136",
    title: "Artificial intelligence for cybersecurity: Literature review and future research directions",
    authors:
      "Ramanpreet Kaur, Dušan Gabrijelčič, Tomaž Klobučar",
    conferences:
      "Information Fusion 2023",
    researchYr: 2023,
    citebox: "popup2",
    image: "assets/images/research-page/ai_and_cs.png",
    citation: {
      vancouver:
        "1.Kaur R, Gabrijelčič D, Klobučar T. Artificial Intelligence for Cybersecurity: Literature Review and Future Research Directions. Information Fusion [Internet]. 2023;97(101804):101804. Available from: https://www.sciencedirect.com/science/article/pii/S1566253523001136",
    },
    abstract:
      "Artificial intelligence (AI) is a powerful technology that helps cybersecurity teams automate repetitive tasks, accelerate threat detection and response, and improve the accuracy of their actions to strengthen the security posture against various security issues and cyberattacks. This article presents a systematic literature review and a detailed analysis of AI use cases for cybersecurity provisioning. The review resulted in 2395 studies, of which 236 were identified as primary. This article classifies the identified AI use cases based on a NIST cybersecurity framework using a thematic analysis approach. This classification framework will provide readers with a comprehensive overview of the potential of AI to improve cybersecurity in different contexts. The review also identifies future research opportunities in emerging cybersecurity application areas, advanced AI methods, data representation, and the development of new infrastructures for the successful adoption of AI-based cybersecurity in today's era of digital transformation and polycrisis.",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      url,
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="${url}" target="_blank" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
