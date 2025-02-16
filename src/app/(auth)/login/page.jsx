import React from "react";

function LoginPage() {
  return (
    <div>
      <div class="flex items-center justify-center min-h-screen">
        <div class="custom-bg p-8 rounded-lg custom-shadow max-w-md w-full bg-foreground border">
          <div class="flex justify-center mb-4">
            <div class="bg-gray-200 p-4 rounded-full">
              <i class="fas fa-sign-in-alt text-2xl"></i>
            </div>
          </div>
          <h2 class="text-2xl font-semibold text-center mb-2">
            Sign in with email
          </h2>
          <p class="text-center text-gray-600 mb-6">
            Make a new doc to bring your words, data, and teams together. For
            free
          </p>
          <form>
            <div class="mb-4 relative">
              <i class="fas fa-envelope custom-input-icon"></i>
              <input
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 custom-input"
                placeholder="Email"
                type="email"
              />
            </div>
            <div class="mb-4 relative">
              <i class="fas fa-lock custom-input-icon"></i>
              <input
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 custom-input"
                placeholder="Password"
                type="password"
              />
              <i class="fas fa-eye-slash absolute right-3 top-3 text-gray-500 cursor-pointer"></i>
            </div>
            <div class="flex justify-between items-center mb-6">
              <a class="text-sm text-blue-500" href="#">
                Forgot password?
              </a>
            </div>
            <button class="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200">
              Get Started
            </button>
          </form>
          <div class="text-center my-4 text-gray-500">Or sign in with</div>
          <div class="flex justify-center space-x-4">
            <button class="bg-white border rounded-full p-2">
              <img
                alt="Google logo"
                class="h-6 w-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/yi44IaPJhG7HMtenKi8575ykuMRexhH91TRN4e70T9Y3LLOoA.jpg"
                width="24"
              />
            </button>
            <button class="bg-white border rounded-full p-2">
              <img
                alt="Facebook logo"
                class="h-6 w-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/XapPKQ0G7eTmWiax9nyTnG591SSEYk6XIejFj3Yt58m8lFHUA.jpg"
                width="24"
              />
            </button>
            <button class="bg-white border rounded-full p-2">
              <img
                alt="Apple logo"
                class="h-6 w-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/kKcrSWEQtMqvGNOCTJd2TaVbuL8DShLVkNVvCYVFEBNeyiDKA.jpg"
                width="24"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
