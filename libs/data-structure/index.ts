export default function sum (...args: number[]): number {
    return args.reduce((oldV, newV) => oldV + newV, 0)
}
