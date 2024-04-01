import React from "react";
import Container from "../../components/container/container";
import ImageSelector from "../../components/imageSelector";
import Viewmap from "../../components/viewmap";
import Form from "../../components/form";
import SelectedImageUpload from "@/components/selectedimageupdate";

const Editdashboard = () => {
  return (
    <Container>
      <div className="flex flex-row">
        <div className="hidden lg:flex lg:w-[300px] lg:-ml-40 mr-20 border">
          side bar
        </div>
        <div className="flex-grow">
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-row gap-6">
              <SelectedImageUpload />
              <Viewmap />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Editdashboard;
