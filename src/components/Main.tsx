import { useState } from "react";
import { RxClipboardCopy } from "react-icons/rx";

export const UserInput = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    chrome.runtime.sendMessage({ action: "callAPI" }, (response) => {
      // Handle the response from the background script here
      console.log(response);
    });
  };

  const SubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  const copied = async () => {
    alert(value);
    const [tab] = await chrome.tabs.query({ active: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id! },
      func: () => {
        alert("()=> Xtension!");
      },
    });
  };

  return (
    <div className="m-5 h-full mb-5">
      <form className="flex flex-col " onSubmit={SubmitForm}>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-600"
        >
          Enter Your Text
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none outline-none  ring-gray-600 focus:ring-gray-600 shadow-sm rounded-lg text-xl ring-2 bg-[#242424] text-gray-50"
          placeholder="Write your thoughts here..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></textarea>
        <span className=" w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 my-3 overflow-hidden text-md font-medium text-gray-900 rounded-lg cursor-pointer group bg-gradient-to-br from-pink-600 to-amber-500 group-hover:from-pink-600 group-hover:to-amber-500 bg-[#242424] focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-sm">
          <input
            onClick={() => {
              handleClick();
            }}
            type="submit"
            value="Convert Text"
            className=" cursor-pointer text-xl w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#242424] rounded-md group-hover:bg-opacity-0 text-white justify"
          />
        </span>
      </form>
      {/* display result */}
      {value.length != 0 && (
        <ul className="pt-2 text-xl flex flex-col gap-4 z-50">
          <li
            onClick={() => {
              copied();
            }}
            className=" relative cursor-pointer flex flex-wrap  line-break bg-white rounded-sm p-3 md:p-4 text-black transition-all ease-in-out  hover:scale-95 active:scale-90 break-all overflow-y-auto"
          >
            <span className="mr-3">{value}</span>
            <span className=" absolute right-0 text-black font-bold z-20 ">
              <RxClipboardCopy className="text-xl" />
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};
