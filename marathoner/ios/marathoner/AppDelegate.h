#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import "RNAppAuthAuthorizationFlowManager.h"
#import "React/RCTLinkingManager.h"

@interface AppDelegate : RCTAppDelegate <RNAppAuthAuthorizationFlowManager>

@property(nonatomic, weak)id<RNAppAuthAuthorizationFlowManagerDelegate>authorizationFlowManagerDelegate;

@end
