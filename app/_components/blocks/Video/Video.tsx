import {
  VideoSection,
  VideoSectionIframe,
  VideoSectionFigures,
  VideoSectionBlurContainer,
  VideoSectionLightContainer,
} from "./style";

const Video = () => {
  return (
    <VideoSection>
      <div className="container">
        <VideoSectionFigures data-aos="zoom-in">
          <VideoSectionBlurContainer>
            <VideoSectionLightContainer>
              <VideoSectionIframe
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen
                title="YouTube video player"
                referrerPolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/o2BJEWVLqSo?si=QcLXhfLtVr-uUEQY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></VideoSectionIframe>
            </VideoSectionLightContainer>
          </VideoSectionBlurContainer>
        </VideoSectionFigures>
      </div>
    </VideoSection>
  );
};

export default Video;
