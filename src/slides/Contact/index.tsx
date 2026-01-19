import AnimatedContent from "../../component/animationContent/animated";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <AnimatedContent
      distance={100}
      direction="vertical"
      reverse={false}
      duration={1.5}
      ease="power2.out"
      initialOpacity={0.2}
      animateOpacity
      scale={1}
      threshold={0.15}
      delay={0.1}
    >
      <div
        className="
        flex flex-col
        items-center
        justify-center
        gap-6 md:gap-10 lg:gap-8
        px-4 py-20
        w-full max-w-5xl mx-auto
        min-h-screen
      "
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white z-20">
          {t("contact")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">
            {t("me")}!
          </span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-light text-center text-white z-20 mb-16">
          {t("p6")}
        </p>

        {/* Contact Container - Cyber Style */}
        <div className="w-full max-w-full bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-1 [0_0_50px_rgba(37,99,235,0.3)]">
          <div className="bg-black/50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Side - Contact Info */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Status Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 text-xs font-bold tracking-wider uppercase">
                    {t("Status")}
                  </span>
                </div>

                {/* Email */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:Phamngocman1203@gmail.com"
                        className="text-white text-sm font-medium hover:text-blue-400 transition"
                      >
                        Phamngocman1203@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/84969337729"
                        className="text-white text-sm font-medium hover:text-blue-400 transition"
                      >
                        +84 969 3377 29
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Text */}
                <div className="mt-auto pt-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="text-xs uppercase tracking-wider">
                      Designed by Man®
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <div className="flex items-center gap-3 mb-8">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <h2 className="text-white text-2xl font-bold tracking-tight uppercase">
                    {t("info")}
                  </h2>
                </div>

                <form className="flex flex-col gap-6">
                  {/* Name Input */}
                  <div>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder={t("name")}
                        className="w-full pl-12 pr-4 py-2 my-2 bg-transparent border-b border-gray-800 outline-none focus:outline-none focus:ring-0 focus:border-blue-500 text-white placeholder-gray-600 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <input
                        type="email"
                        placeholder={t("mail")}
                        className="w-full pl-12 pr-4 py-2 my-2 bg-transparent border-b border-gray-800 outline-none focus:outline-none focus:ring-0 focus:border-blue-500 text-white placeholder-gray-600 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <textarea
                      rows={6}
                      placeholder={t("mess")}
                      className="w-full px-4 py-4 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-blue-600 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2"
                  >
                    {t("send")}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default Contact;
