const StatsSection = () => (
    <div className="relative flex flex-col gap-10 items-end pr-12">
      {/* Box 1 */}
      <div className="p-10 bg-gradient-to-r from-red-600 to-black text-white rounded-lg shadow-lg w-96 h-48 relative right-10">
        <h2 className="text-4xl font-semibold">3+ Years Experience</h2>
        <p className="text-gray-300 mt-2">Delivering Top Notch Quality since 2021</p>
      </div>
  
      {/* Box 2 */}
      <div className="p-10 bg-gradient-to-r from-red-600 to-black text-white rounded-lg shadow-lg w-96 h-48 relative right-5">
        <h2 className="text-4xl font-semibold">10M$+</h2>
        <p className="text-gray-300 mt-2">Tens of Million Dollars Under Management</p>
      </div>
  
      {/* Box 3 */}
      <div className="p-10 bg-gradient-to-r from-red-600 to-black text-white rounded-lg shadow-lg w-96 h-48 relative right-0">
        <h2 className="text-4xl font-semibold">50+ Brands</h2>
        <p className="text-gray-300 mt-2">Successfully Managed</p>
      </div>
    </div>
  );
  
  export default StatsSection;
  