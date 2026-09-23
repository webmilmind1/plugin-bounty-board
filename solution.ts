/**
 * Network definitions used by the bounty‑board plugin.
 *
 * Each entry describes a network that can be used for payments via the
 * x402 exact‑scheme.  The `acceptedNetworks` list is exposed through the
 * `.well-known/x402` endpoint (generated at runtime by the plugin) and
 * determines which payment rails the board will accept.
 *
 * The new entry for Nano (XNO) adds a feeless, native‑currency option.
 */

export interface AcceptedNetwork {
  /** Human readable network identifier (e.g. "solana", "base", "nano") */
  network: string;
  /** Asset symbol used on the network (null for native currency) */
  asset: string | null;
  /** CAIP‑2 chain identifier (e.g. "eip155:8453", "solana", "nano:mainnet") */
  networkCaip2: string;
}

/**
 * List of networks that the bounty board accepts for payment.
 *
 * Existing entries are kept unchanged; a new entry for Nano (XNO) is added.
 */
export const acceptedNetworks: AcceptedNetwork[] = [
  // Existing USDC networks (unchanged)
  { network: "base",   asset: "USDC", networkCaip2: "eip155:8453" },
  { network: "polygon",asset: "USDC", networkCaip2: "eip155:137" },
  { network: "sei",    asset: "USDC", networkCaip2: "eip155:1329" },
  { network: "avalanche", asset: "USDC", networkCaip2: "eip155:43114" },
  { network: "solana", asset: "USDC", networkCaip2: "solana" },
  { network: "algorand", asset: "USDC", networkCaip2: "algorand" },

  // New feeless Nano network
  {
    network: "nano",
    asset: null,               // native XNO, no token contract
    networkCaip2: "nano:mainnet"
  }
];
