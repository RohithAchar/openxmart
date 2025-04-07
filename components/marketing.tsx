const Marketing = () => {
  return (
    <div className="flex justify-center gap-8 md:gap-24 flex-wrap px-4 py-8">
      <div className="overflow-hidden text-center flex flex-col items-center">
        <img
          src="/images/trust.png"
          alt="trust"
          className="w-20 h-20 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">100% Trust</h2>
      </div>
      <div className="overflow-hidden text-center flex flex-col items-center">
        <img
          src="/images/secure.png"
          alt="trust"
          className="w-20 h-20 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">Secure Payment</h2>
      </div>
      <div className="overflow-hidden text-center flex flex-col items-center">
        <img
          src="/images/india.png"
          alt="trust"
          className="w-20 h-20 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">Made for Bharath</h2>
      </div>
      <div className="overflow-hidden text-center flex flex-col items-center">
        <img
          src="/images/diagram.png"
          alt="trust"
          className="w-20 h-20 md:w-24 md:h-24 object-cover"
        />
        <h2 className="text-xl font-bold mt-4">Trust</h2>
      </div>
    </div>
  );
};

export default Marketing;
