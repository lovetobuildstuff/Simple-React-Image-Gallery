// Cache gallery container
const galleryContainer = document.querySelector('.react-gallery');

// Create new array with URLs for images
let imgUrls = [
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imghetr.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgishn.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgslei.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgkoa2.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imglbac.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imglsic.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imglwaa.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imglwar.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgmhaa.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgmsur.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgndan.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgnmot.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/img744.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgaaye.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgaaza.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgagrs.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgasty.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgdinn.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgoflod.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgpala.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgrbun.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgrdae.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgvvia.jpg',
	'https://lovetobuildstuff.neocities.org/git_files/react-gallery/imgwdon.jpg'
];

// Component for gallery image
class GalleryImage extends React.Component {
  render() {
    return (
      React.createElement("img", { className: this.props.className, src: this.props.src, alt: this.props.alt }));
  }}

// Component for modal dialog
class GalleryModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return (
      React.createElement("div", { isOpen: this.props.isOpen, className: "modal-overlay", onClick: this.props.onClick, name: this.props.name },
      React.createElement("div", { className: "modal-body" },
      React.createElement("a", { className: "modal-close", href: "#", onClick: this.props.onClick }, React.createElement("span", { className: "fa fa-times" })),

      React.createElement("img", { src: this.props.src }))));

  }}

// Component for gallery
class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '' };


    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  render() {
    return (
      React.createElement("div", { refs: "gallery-container", className: "container-fluid gallery-container" },
      React.createElement("div", { className: "row" },

      imgUrls.map((url, index) => {
        return React.createElement("div", { className: "col-sm-6 col-md-3 col-xl-2" },
        React.createElement("div", { className: "gallery-card" },
        React.createElement(GalleryImage, { className: "gallery-thumbnail", src: url, alt: 'Image number ' + (index + 1) }),

        React.createElement("span", { className: "card-icon-open fa fa-expand", value: url, onClick: e => this.openModal(url, e) })));

      })),

      React.createElement(GalleryModal, { isOpen: this.state.showModal, onClick: this.closeModal, src: this.state.url })));
  }

  // open modal dialog
  openModal(url, e) {
    this.setState({
      showModal: true,
      url: url });

  }

  // close modal dialog
  closeModal() {
    this.setState({
      showModal: false,
      url: '' });

  }}

// render the gallery
ReactDOM.render(
React.createElement(Gallery, { imgUrls: imgUrls }),
galleryContainer);
