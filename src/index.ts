// @deskcrew/plugin-bounty-board: the bounty board as an ElizaOS plugin.
//
// The implementation lives in x402-bounty-hunter/elizaos (one payment
// implementation shared by every framework adapter); this package is the
// registry-shaped wrapper: plugin-name prefix, images, dist build.
//
// Settings: DESKCREW_WALLET_KEY (0x hex pays on Base, base58 pays on Solana
// with zero SOL), DESKCREW_BOARD_URL, DESKCREW_MAX_PRICE_USD,
// DESKCREW_MAX_BOARD_PRICE_USD. Free actions work keyless.

// @ts-ignore - plain ESM module with no bundled types
import { bountyBoardPlugin } from 'x402-bounty-hunter/elizaos'

export { bountyBoardPlugin }
export default bountyBoardPlugin
