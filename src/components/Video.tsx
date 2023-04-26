import type { ElementModels, IContentItem } from "@kontent-ai/delivery-sdk";

export const Video = ({ linkedItem }: { linkedItem: IContentItem }) => {
    if (
        linkedItem?.elements.video_host.value.find(
          (item: ElementModels.MultipleChoiceOption) =>
            item.codename === 'vimeo'
        )
      ) {
        return (
          <iframe
            className="hosted-video__wrapper"
            src={`https://player.vimeo.com/video/${linkedItem.elements.video_id.value}?title=0&byline=0&portrait=0`}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            title={`Vimeo video ${linkedItem.elements.video_id.value}`}
          ></iframe>
        );
      } else if (
        linkedItem?.elements.video_host.value.find(
          (item: ElementModels.MultipleChoiceOption) =>
            item.codename === 'youtube'
        )
      ) {
        return (
          <iframe
            className="hosted-video__wrapper"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${linkedItem.elements.video_id.value}`}
            frameBorder="0"
            allowFullScreen
            title={`Youtube video ${linkedItem.elements.video_id.value}`}
          ></iframe>
        );
      } else {
        return <div>Content item not supported</div>;
      }
}