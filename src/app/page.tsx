"use client";
import { TodoItem } from "./types/TodoItem";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


export default function Page() {
  const [itemInput, setItemInput] = useState("");

  const [list, setList] = useState<TodoItem[]>([
    { label: "Use a lixeira para deletar", checked: true },
    { label: "Melhorar responsividade", checked: false },
    { label: "Estilizar o cabeçalho e caixa de tarefas", checked: false },
  ]);

  const deleteItem = (index: number) => {
    setList(list.filter((_, key) => key !== index));
  };

  const toggleItem = (index: number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;
    setList(newList);
  };

  const handleAddButton = () => {
    if (itemInput.trim() === "") return;
    setList([...list, { label: itemInput, checked: false }]);
    setItemInput("");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col text-2xl">
      {/* HEADER fixo no topo */}
      <header className="w-full flex justify-center bg-[#001e4a] bg-opacity-55">
        <img src="/logo.png" className="w-56 h-auto" />
      </header>

      {/* CONTEÚDO com background */}
      <div className="flex flex-col items-center w-full min-h-screen bg-[url('/banner.png')] bg-repeat bg-center">
        <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-[#05152e] border-2 border-[#05152e]">
          <input
            type="text"
            placeholder="O que deseja fazer?"
            className="flex-1 border placeholder-[#29B4F0] bg-gray-900 border-[#052E2D] p-3 text-2xl text-[#00dcff] rounded-md mr-3"
            value={itemInput}
            onChange={(e) => setItemInput(e.target.value)}
          />
          <button onClick={handleAddButton} className="text-[#00dcff]">
            Adicionar
          </button>
        </div>

        <p className="text-4xl font-bold my-4 italic">
          {list.length} itens na lista
        </p>
        <ul className="w-full max-w-lg space-y-2 pl-5">
          {list.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-start space-x-4 bg-gray-900 h-20 p-2 rounded-md"
            >
              <input
                onClick={() => toggleItem(index)}
                type="checkbox"
                checked={item.checked}
                className=" ml-4 w-6 h-6 "
              />
              <span className="flex-1">{item.label}</span>
              <button
                onClick={() => deleteItem(index)}
                className="hover:text-red-600 text-3xl text-[#00dcff] mx-2"
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="bg-[#001e4a] flex items-center justify-center text-center h-auto p-4">
        <span>Desenvolvido por Guilherme França</span>
        <button className="ml-4"> 
        <a
            href="https://www.linkedin.com/in/guilhermesfranca/"
            target="_blank"
            rel="noreferrer nofollow"
            className="text-white text-3xl"
          >
            <FaLinkedin />
          </a>
          </button>
          <button className="ml-4">
          <a
            href="https://github.com/guilhermesfranca/react-to-do"
            target="_blank"
            rel="noreferrer nofollow"
            className="text-white text-3xl"
          >
            <FaGithubSquare />
          </a>
          </button>
          
      </footer>
    </div>
  );
}
