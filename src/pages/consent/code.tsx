const Code = () => {
    

  return (
    <div className="grid content-center justify-center h-screen">
      <h1 className="max-w-[800px] text-3xl text-center font-bold mb-8">
        Do you want this <span className="text-[#fec00f]">ABC</span> to use your
        Geo Main credentials to get access to the application?
      </h1>
      <div className="mx-auto">
        <button onClick={() => window.location.assign("https://geomain.com/")} className="font-bold px-6 py-2 bg-[#fec00f] rounded-lg mr-6">Agree</button>
        <button className="font-bold px-6 py-2 bg-[#fec00f] rounded-lg">Cancel</button>
      </div>
    </div>
  );
};

export default Code;
