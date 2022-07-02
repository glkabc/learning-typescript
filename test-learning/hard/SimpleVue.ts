/* _____________ 你的代码 _____________ */

type GetComputed<T> = {
  [P in keyof T]:T[P] extends (...args:any[])=>any ? ReturnType<T[P]> : never;
}

type Extractor<D,C,M> = {
  data():D;
  computed:C & ThisType<D & C>;
  methods:M & ThisType<D & M & GetComputed<C>>;
} & ThisType<C>;
declare function SimpleVue<D,C,M>(options: Extractor<D,C,M>): any

/**
 * 网上答案：不会这题
 * 这答案测试用例也没有完全通过
 */
  
  /* _____________ 测试用例 _____________ */
  import type { Equal, Expect } from '@type-challenges/utils'
  
  SimpleVue({
    data() {
      // @ts-expect-error
      this.firstname
      // @ts-expect-error
      this.getRandom()
      // @ts-expect-error
      this.data()
  
      return {
        firstname: 'Type',
        lastname: 'Challenges',
        amount: 10,
      }
    },
    computed: {
      fullname() {
        return `${this.firstname} ${this.lastname}`
      },
    },
    methods: {
      getRandom() {
        return Math.random()
      },
      hi() {
        alert(this.amount)
        alert(this.fullname.toLowerCase())
        alert(this.getRandom())
      },
      test() {
        const fullname = this.fullname
        const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
      },
    },
  })