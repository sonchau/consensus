import React, { Component } from "react";
import ServerCookie from "next-cookies";
import Router from "next/router";
import { COOKIES } from "../../services/cookie";

export function privateRoute(WrappedComponent: any) {
  return class extends Component {
    static async getInitialProps(ctx: any) {
      const isAuthenticatedCookie = ServerCookie(ctx)[COOKIES.name];

      if (!isAuthenticatedCookie) {
        ctx.res.writeHead(302, {
          Location: "/",
        });
        ctx.res.end();
      }
    }

    render() {
      return <WrappedComponent {...this.props} authenticated={true} />;
    }
  };
}
