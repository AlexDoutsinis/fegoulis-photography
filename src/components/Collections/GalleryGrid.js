import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"

import { StyledImgWrapper, StyledImg } from "../../styledElements/Collections"

const GalleryGrid = ({ data: { gallery } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = imageIndex => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }

  return (
    <>
      {gallery.map(({ fluid }, index) => (
        <StyledImgWrapper onClick={() => openModal(index)} key={index}>
          <StyledImg fluid={fluid} />
        </StyledImgWrapper>
      ))}

      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal
              onClose={closeModal}
              styles={{
                blanket: base => ({
                  ...base,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  zIndex: "1",
                }),
                positioner: base => ({
                  ...base,
                  zIndex: "2",
                }),
              }}
            >
              <Carousel
                views={gallery.map(({ fluid }) => ({ source: fluid.src }))}
                currentIndex={modalCurrentIndex}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </>
  )
}

export default GalleryGrid
