import { FC } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact: FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold italic text-center mb-6">
        Get in Touch with Brixo
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-gray text-xl" />
            <p className="text-gray-700">
              <strong>Brixo Global Headquarters</strong> <br />
              1234 Commerce Street, Suite 500, New York, NY 10001, USA
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-gray text-xl" />
            <p className="text-gray-700">+1 (800) 123-4567</p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray text-xl" />
            <p className="text-gray-700">support@brixo.com</p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Brixo Location"
            className="w-full h-64 md:h-80"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.343065869363!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19b16b6e79%3A0x65b8dd4b6b0f7a84!2sNew%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1712103895726!5m2!1sen!2sus"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 p-6">
        <h3 className="text-xl font-bold italic mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg "
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg h-32 "
          ></textarea>
          <button
            type="button"
            className="w-full bg-red cursor-pointer text-white p-3 rounded-lg hover:brightness-110"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
