import { useRef, useState } from "react";
import axiosCall from "../../api/axiosCall";

type formValues = {
  title1: string;
  description1: string;
  image1: any;
  title2: string;
  description2: string;
  image2: any;
};

const Upload = () => {
  const image1Ref = useRef<null | HTMLInputElement>(null);
  const image2Ref = useRef<null | HTMLInputElement>(null);
  const [formValues, setFormValues] = useState<formValues>({
    title1: "",
    description1: "",
    image1: null,
    title2: "",
    description2: "",
    image2: null,
  });

  const [loader, setLoader] = useState<boolean>(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const [alert, setAlert] = useState<{
    success: null | boolean;
    data: string;
  }>({ success: null, data: "" });
  const handleImageChange = (e: any) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormValues({
      ...formValues,
      [name]: file,
    });
  };
  const clearImage1 = () => {
    if (image1Ref.current) {
      image1Ref.current.value = "";
    }
    setFormValues({
      ...formValues,
      image1: null,
    });
  };
  const clearImage2 = () => {
    if (image2Ref.current) {
      image2Ref.current.value = "";
    }
    setFormValues({
      ...formValues,
      image2: null,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoader(true);
    window.scrollTo(0, 0);
    setAlert({ success: null, data: "" });

    const formData = new FormData();
    formData.append("title", formValues.title1);
    formData.append("description", formValues.description1);

    if (formValues.image1) {
      formData.append("images[]", formValues.image1);
    }
    formData.append("second_title", formValues.title2);
    formData.append("second_description", formValues.description2);
    formValues.image2 && formData.append("images[]", formValues.image2);

    try {
      const response = await axiosCall.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status == 100) {
        setAlert({ success: true, data: "სტატია წარმატებით აიტვირთა !" });
        if (image1Ref.current) {
          image1Ref.current.value = "";
        }
        if (image2Ref.current) {
          image2Ref.current.value = "";
        }
        setFormValues({
          title1: "",
          description1: "",
          image1: null,
          title2: "",
          description2: "",
          image2: null,
        });
      } else if (response.data.status == 5) {
        setAlert({ success: false, data: "შეავსეთ ყველა სავალდებულო ველი !" });
      } else if (response.data.status == 6) {
        setAlert({
          success: false,
          data: "არასწორი ფოტოს ფორმატი მხოლოდ JPG JPEG PNG !",
        });
      } else {
        setAlert({ success: false, data: "სერვერზე ხარვეზია" });
      }
      setLoader(false);
    } catch (error) {
      setAlert({ success: false, data: "სერვერზე ხარვეზია" });
      setLoader(false);
    }
  };

  return (
    <main className="my-10">
      {loader ? (
        <div className="fixed top-0 left-0 h-full w-full flex z-30 justify-center items-center">
          <div className="absolute w-full h-full top-0 left-0 bg-black opacity-20"></div>
          <div className="Loader relative z-10"></div>
        </div>
      ) : null}
      <div className="content_container">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
        >
          {alert.success !== null ? (
            alert.success == true ? (
              <div className="w-full bg-violet-100 border-[2px] border-violet-600 text-violet-600 text-center p-3 rounded-lg">
                {alert.data}
              </div>
            ) : (
              <div className="w-full bg-rose-100 border-[2px] border-rose-600 text-rose-600 text-center p-3 rounded-lg">
                {alert.data}
              </div>
            )
          ) : null}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              სათაური:
            </label>
            <input
              type="text"
              name="title1"
              value={formValues.title1}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-main focus:border-main sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              სტარტერის სათაური:
            </label>
            <input
              type="text"
              name="title2"
              value={formValues.title2}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-main focus:border-main sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              აღწერის დასაწისი:
            </label>
            <textarea
              name="description1"
              value={formValues.description1}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-main focus:border-main sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              აღწერა რეკლამის მერე:
            </label>
            <textarea
              name="description2"
              value={formValues.description2}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-main focus:border-main sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              მთავარი ფოტო:
            </label>{" "}
            <div className="flex justify-between">
              <input
                ref={image1Ref}
                type="file"
                name="image1"
                accept="image/png, image/jpeg, image/jpg"
                title=" "
                onChange={handleImageChange}
                className=" select-none text-transparent mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-mainClear file:text-main hover:file:bg-mainClear"
              />
              {formValues.image1 ? (
                <button
                  className="w-[100px] h-[34px] flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:bg-mainHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
                  onClick={() => clearImage1()}
                >
                  Delete
                </button>
              ) : null}
            </div>{" "}
            {formValues.image1 ? (
              <div>
                <img
                  className="rounded-lg mt-3 mx-auto w-full"
                  src={URL.createObjectURL(formValues.image1)}
                />
              </div>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              მეორე ფოტო (არასავალდებულო):
            </label>
            <div className="flex justify-between">
              <input
                ref={image2Ref}
                type="file"
                name="image2"
                title=" "
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleImageChange}
                className=" select-none text-transparent mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-mainClear file:text-main hover:file:bg-mainClear"
              />
              {formValues.image2 ? (
                <button
                  className="w-[100px] h-[34px] flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:bg-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
                  onClick={() => clearImage2()}
                >
                  Delete
                </button>
              ) : null}
            </div>
            {formValues.image2 ? (
              <div>
                <img
                  className="rounded-lg mt-3 mx-auto w-full"
                  src={URL.createObjectURL(formValues.image2)}
                />
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-main hover:bg-mainHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main"
          >
            ატვირთვა
          </button>
        </form>
      </div>
    </main>
  );
};

export default Upload;
