package com.awesomeproject;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactHost;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactHost;
import com.facebook.react.flipper.ReactNativeFlipper;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  @Override
  public ReactNativeHost getReactNativeHost() {
    return new DefaultReactNativeHost(this) {
      @Override
      protected List<ReactPackage> getPackages() {
        // Packages that cannot be autolinked yet can be added manually here, for example:
        // packages.add(new MyReactNativePackage());
        return new PackageList(this).getPackages();
      }

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

      @Override
      protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override
      protected boolean isNewArchEnabled() {
        return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
      }

      @Override
      protected boolean getUseHermes() {
        return BuildConfig.IS_HERMES_ENABLED;
      }
    };
  }

  @Override
  public ReactHost getReactHost() {
    return DefaultReactHost.getOrCreateReactContext(this.applicationContext, getReactNativeHost());
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new VectorIconsPackage()
    );
  }
}
